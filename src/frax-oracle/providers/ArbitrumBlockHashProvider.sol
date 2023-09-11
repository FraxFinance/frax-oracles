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
// ===================== ArbitrumBlockHashProvider ====================
// ====================================================================
// Frax Finance: https://github.com/FraxFinance

// Authors
// Jon Walch: https://github.com/jonwalch
// Dennis: https://github.com/denett

// Reviewers
// Drake Evans: https://github.com/DrakeEvans

// ====================================================================
import { AddressAliasHelper } from "@arbitrum/nitro-contracts/src/libraries/AddressAliasHelper.sol";
import { IBlockHashProvider } from "../interfaces/IBlockHashProvider.sol";

/// @title ArbitrumBlockHashProvider
/// @author Jon Walch (Frax Finance) https://github.com/jonwalch
/// @notice Receives L1 block hashes through Arbitrum bridge from a ArbitrumBlockHashRelay
contract ArbitrumBlockHashProvider is IBlockHashProvider {
    /// @notice The address that deploys this contract
    address immutable DEPLOYER;

    /// @notice The ArbitrumBlockHashRelay on L1 that sends block hashes to this contract
    address public layer1SourceRelay;

    /// @notice Mapping from blockHash to bool that it written after a block hash is received from L1
    mapping(bytes32 blockHash => bool stored) storedBlockHashes;

    /// @notice The ```constructor``` function
    constructor() {
        DEPLOYER = msg.sender;
    }

    // ====================================================================
    // Initializer
    // ====================================================================

    /// @notice The ```initialize``` function sets the layer1SourceRelay if it hasn't been set already
    /// @dev The ArbitrumBlockHashRelay and this contract both need to know the address of the other.
    /// @dev We deploy this contract first, then the ArbitrumBlockHashRelay, and then call this function.
    /// @param _layer1SourceRelay The address of the L1 ArbitrumBlockHashRelay
    function initialize(address _layer1SourceRelay) external {
        if (msg.sender != DEPLOYER) revert Unauthorized();
        if (layer1SourceRelay != address(0)) revert AlreadyInitialized();
        layer1SourceRelay = _layer1SourceRelay;
    }

    // ====================================================================
    // Events
    // ====================================================================

    /// @notice The ```BlockHashReceived``` event is emitted when a block hash is received
    /// @param blockHash A block hash of a L1 block
    event BlockHashReceived(bytes32 blockHash);

    // ====================================================================
    // External Getters
    // ====================================================================

    /// @notice The ```blockHashStored``` function returns if the _blockHash is stored or not
    /// @param _blockHash The block hash
    /// @return _result A bool representing if the _blockHash is stored or not
    function blockHashStored(bytes32 _blockHash) external view returns (bool _result) {
        _result = storedBlockHashes[_blockHash];
    }

    // ====================================================================
    // Receive Block Hash Function
    // ====================================================================

    /// @notice The ```receiveBlockHash``` function receives block hashes from L1 through Arbitrum bridge and stores them
    /// @param _blockHash The block hash
    function receiveBlockHash(bytes32 _blockHash) external {
        if (msg.sender != AddressAliasHelper.applyL1ToL2Alias(layer1SourceRelay)) revert WrongSourceRelay();

        // Don't write state or emit event again if already received this _blockHash
        if (!storedBlockHashes[_blockHash]) {
            storedBlockHashes[_blockHash] = true;
            emit BlockHashReceived(_blockHash);
        }
    }

    // ====================================================================
    // Errors
    // ====================================================================

    error AlreadyInitialized();
    error WrongSourceRelay();
    error Unauthorized();
}
