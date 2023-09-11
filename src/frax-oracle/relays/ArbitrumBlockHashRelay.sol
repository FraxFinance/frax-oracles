// SPDX-License-Identifier: ISC
pragma solidity ^0.8.19;

// ====================================================================
// |     ______                   _______                             |
// |    / _____________ __  __   / ____(_____  ____ _____  ________   |
// |   / /_  / ___/ __ `| |/_/  / /_  / / __ \/ __ `/ __ \/ ___/ _ \  |
// |  / __/ / /  / /_/ _>  <   / __/ / / / / / /_/ / / / / /__/  __/  |
// | /_/   /_/   \__,_/_/|_|  /_/   /_/_/ /_/\__,_/_/ /_/\___/\___/   |
// |                                                                  |
// ====================================================================
// ====================== ArbitrumBlockHashRelay ======================
// ====================================================================
// Frax Finance: https://github.com/FraxFinance

// Authors
// Jon Walch: https://github.com/jonwalch
// Dennis: https://github.com/denett

// Reviewers
// Drake Evans: https://github.com/DrakeEvans

// ====================================================================
import { IInbox } from "arbitrum/nitro-contracts/src/bridge/IInbox.sol";
import { ArbitrumBlockHashProvider } from "../providers/ArbitrumBlockHashProvider.sol";

/// @title ArbitrumBlockHashRelay
/// @author Jon Walch (Frax Finance) https://github.com/jonwalch
/// @notice Sends L1 block hashes through Arbitrum bridge to an ArbitrumBlockHashProvider
contract ArbitrumBlockHashRelay {
    /// @notice The ArbitrumBlockHashProvider on L2 that receives block hashes from this contract
    address public immutable LAYER_2_TARGET_PROVIDER;
    /// @notice The Arbitrum inbox
    IInbox public immutable INBOX;

    /// @notice The ```constructor``` function
    /// @param _layer2TargetProvider The address of the L2 ArbitrumBlockHashProvider contract that receives block hashes
    /// @param _inbox The address of the Arbitrum Inbox
    constructor(address _layer2TargetProvider, address _inbox) {
        LAYER_2_TARGET_PROVIDER = _layer2TargetProvider;
        INBOX = IInbox(_inbox);
    }

    // ====================================================================
    // Events
    // ====================================================================

    /// @notice The ```BlockHashRelayed``` event is emitted when a block hash is sent to the L2 ArbitrumBlockHashProvider
    /// @param blockNumber The block number corresponding to the block hash that was sent to
    /// @param ticketId The Arbitrum Inbox ticket ID of the createRetryableTicket request
    event BlockHashRelayed(uint256 indexed blockNumber, uint256 indexed ticketId);

    // ====================================================================
    // Receive Block Hash Function
    // ====================================================================

    /// @notice The ```relayBlockHash``` function sends block hashes from L1 through Arbitrum bridge to the L2 ArbitrumBlockHashProvider
    /// @param _blockNumber The block number
    /// @param _maxSubmissionCost The max gas deducted from user's L2 balance to cover base submission fee
    /// @param _gasLimit The max gas deducted from user's L2 balance to cover L2 execution. Should not be set to 1 (magic value used to trigger the RetryableData error)
    /// @param _maxFeePerGas The price bid for L2 execution. Should not be set to 1 (magic value used to trigger the RetryableData error)
    /// @return _ticketId The Arbitrum Inbox ticket ID of the createRetryableTicket request
    function relayBlockHash(
        uint256 _blockNumber,
        uint256 _maxSubmissionCost,
        uint256 _gasLimit,
        uint256 _maxFeePerGas
    ) external payable returns (uint256 _ticketId) {
        bytes32 _blockHash = blockhash(_blockNumber);
        // blockhash() only works for the 256 most recent blocks, returns 0 if older or current block
        if (_blockHash == 0) revert InvalidBlockNumber();

        bytes memory data = abi.encodeCall(ArbitrumBlockHashProvider.receiveBlockHash, (_blockHash));
        _ticketId = INBOX.createRetryableTicket{ value: msg.value }({
            to: LAYER_2_TARGET_PROVIDER,
            l2CallValue: 0,
            maxSubmissionCost: _maxSubmissionCost,
            excessFeeRefundAddress: msg.sender,
            callValueRefundAddress: msg.sender,
            gasLimit: _gasLimit,
            maxFeePerGas: _maxFeePerGas,
            data: data
        });
        emit BlockHashRelayed({ blockNumber: _blockNumber, ticketId: _ticketId });
    }

    // ====================================================================
    // Errors
    // ====================================================================

    error InvalidBlockNumber();
}
