import { address as apeCoinDualOracleAddress } from "../../deployments/mainnet/ApeCoinDualOracle.json";
import { address as fpiOracleAddress } from "../../deployments/mainnet/FPIOracle.json";
import { address as fpiOracleAddressV2 } from "../../deployments/mainnet/FPIOracleV2.json";
import { address as sfrxEthDualOracleAddress } from "../../deployments/mainnet/SfrxEthDualOracleChainlinkUniV3.json";
import { address as sfrxEthOracleV2Address } from "../../deployments/mainnet/SfrxEthOracleV2.json";

// Fraxlend Admin Addresses
export const COMPTROLLER_ADDRESS = "0x168200cF227D4543302686124ac28aE0eaf2cA0B";
export const CIRCUIT_BREAKER_ADDRESS = "0xfd3065C629ee890Fd74F43b802c2fea4B7279B8c";
export const TIMELOCK_ADDRESS = "0x8412ebf45bAC1B340BbE8F318b928C466c4E39CA";
export const FRAX_HOT_WALLET = "0xdB3388e770F49A604E11f1a2084B39279492a61f";

// Routers
export const FRAXSWAP_ROUTER_ADDRESS = "0xC14d550632db8592D1243Edc8B95b0Ad06703867";
export const UNIV2_ROUTER = "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D";

// Project Tokens
export const FRAX_ERC20 = "0x853d955aCEf822Db058eb8505911ED77F175b99e";
export const FXS_ERC20 = "0x3432B6A60D23Ca0dFCa7761B7ab56459D9C964D0";
export const FRXETH_ERC20 = "0x5E8422345238F34275888049021821E8E08CAa1f";
export const SFRXETH_ERC20 = "0xac3E018457B222d93114458476f3E3416Abbe38F";

// Curve Pools
export const FRXETH_ETH_CURVE_POOL_NOT_LP = "0xa1F8A6807c402E4A15ef4EBa36528A3FED24E577";
export const FRAX_USDC_CURVE_POOL_NOT_LP = "0xDcEF968d416a41Cdac0ED8702fAC8128A64241A2";
export const LDO_ETH_CURVE_V2_POOL = "0x9409280DC1e6D33AB7A8C6EC03e5763FB61772B5";
export const FRAX_USDC_PLAIN_POOL = "0xDcEF968d416a41Cdac0ED8702fAC8128A64241A2";

// Oracles (Old)
export const CPI_TRACKER_ORACLE = "0x66B7DFF2Ac66dc4d6FBB3Db1CB627BBb01fF3146";
export const FPI_ORACLE = fpiOracleAddress;
export const FPI_ORACLE_V2 = fpiOracleAddressV2;
export const GOHM_ORACLE = "0xe893297a9d4310976424fD0B25f53aC2B6464fe3";
export const SFRXETH_ORACLE = "0x27942aFe4EcB7F9945168094e0749CAC749aC97B";
export const SFRXETH_ORACLE_V2 = sfrxEthOracleV2Address;

// FPI
export const FPI_CONTROLLER_POOL_ADDRESS = "0x2397321b301B80A1C0911d6f9ED4b6033d43cF51";

// Convex Wrappers
export const CONVEX_WRAPPER_FRAX_USDC_LP = "0x54a3A6aFd87F10Eea4Acc2A067A2C0b612B6D315";
export const CONVEX_WRAPPER_FRXETH_ETH_LP = "0xd1b222AAEdf2877CeEB3c66BDaA6858200eb48fC";

// Dual Oracles
export const AAVE_TOKEN_DUAL_ORACLE_ADDRESS = "0x3284E1BCEaf70767A7575d0e1e10fAFbC4618B52";
export const APECOIN_DUAL_ORACLE_ADDRESS = apeCoinDualOracleAddress;
export const CHAIN_LINK_TOKEN_DUAL_ORACLE = "0x605F7ADD3A14ACA676B1F60F3b36C772720946Aa";
export const FRAX_USDC_CURVE_LP_DUAL_ORACLE_ADDRESS = "0x2Ad35cce2a690E0bF1e6dCAC2F9175389F31D7F4";
export const FRXETH_ETH_CURVE_POOL_LP_DUAL_ORACLE_ADDRESS = "0x013723E5631c591Af50E89C2892b464530103481";
export const MAKER_DUAL_ORACLE_ADDRESS = "0x4c7b43EcE8958D7f6b184B3833DD1D383db1f83b";
export const SFRXETH_DUAL_ORACLE_ADDRESS = sfrxEthDualOracleAddress;
export const UNISWAP_DUAL_ORACLE_ADDRESS = "0x33A9D662d9F7cb2153e3a5102615B08865BeAbdB";
export const FRXETH_ETH_DUAL_ORACLE_ADDRESS = "0xb12c19C838499E3447AFd9e59274B1BE56b1546A";
export const SFRXETH_ETH_DUAL_ORACLE_ADDRESS = "0x1473F3e4d236CBBe3412b9f65B4c210756BE2C0E";

// Frax Oracles
export const FRXETH_FRAX_ORACLE_ADDRESS = "0xC58F3385FBc1C8AD2c0C9a061D7c13b141D7A5Df";
export const SFRXETH_FRAX_ORACLE_ADDRESS = "0xB9af7723CfBd4469A7E8aa60B93428D648Bda99d";

// UNI_V3
export const AAVE_ETH_UNI_V3_POOL = "0x5aB53EE1d50eeF2C1DD3d5402789cd27bB52c1bB";
export const APE_WETH_UNI_V3_POOL = "0xAc4b3DacB91461209Ae9d41EC517c2B9Cb1B7DAF";
export const FRAX_USDC_V3_POOL = "0xc63B0708E2F7e69CB8A1df0e1389A98C35A76D52";
export const FRXETH_FRAX_V3_POOL = "0x36C060Cc4b088c830a561E959A679A58205D3F56";
export const LINK_ETH_UNI_V3_POOL = "0xa6Cc3C2531FdaA6Ae1A3CA84c2855806728693e8";
export const MKR_ETH_UNI_V3_POOL = "0xe8c6c9227491C0a8156A0106A0204d881BB7E531";
export const STATIC_UNI_V3_ORACLE = "0xB210CE856631EeEB767eFa666EC7C1C57738d438";
export const UNI_ETH_UNI_V3_POOL = "0x1d42064Fc4Beb5F8aAF85F4617AE8b3b5B8Bd801";
export const FRAX_WETH_UNI_V3_POOL = "0x92c7b5Ce4CB0e5483F3365C1449f21578eE9f21A";
export const USDC_WETH_UNI_V3_POOL = "0x88e6A0c2dDD26FEEb64F039a2c41296FcB3f5640";

// ERC20s
export const AAVE_ERC20 = "0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9";
export const APE_ERC20 = "0x4d224452801ACEd8B2F0aebE155379bb5D594381";
export const CRV_ERC20 = "0xD533a949740bb3306d119CC777fa900bA034cd52";
export const CVX_ERC20 = "0x4e3FBD56CD56c3e72c1403e103b45Db9da5B9D2B";
export const FIL_ERC20 = "0xB8B01cec5CEd05C457654Fc0fda0948f859883CA";
export const FPIS_ERC20 = "0xc2544A32872A91F4A553b404C6950e89De901fdb";
export const FPI_ERC20 = "0x5Ca135cB8527d76e932f34B5145575F9d8cbE08E";
export const FRAX_USDC_CURVE_POOL_LP_ERC20 = "0x3175Df0976dFA876431C2E9eE6Bc45b65d3473CC";
export const FRXETH_ETH_CURVE_POOL_LP_ERC20 = "0xf43211935C781D5ca1a41d2041F397B8A7366C7A";
export const GOHM_ERC20 = "0x0ab87046fBb341D058F17CBC4c1133F25a20a52f";
export const LDO_ERC20 = "0x5A98FcBEA516Cf06857215779Fd812CA3beF1B32";
export const LINK_ERC20 = "0x514910771AF9Ca656af840dff83E8264EcF986CA";
export const MKR_ERC20 = "0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2";
export const UNI_ERC20 = "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984";
export const USDC_ERC20 = "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48";
export const WBTC_ERC20 = "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599";
export const WETH_ERC20 = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2";

// CHAINLINK
export const AAVE_USD_CHAINLINK_ORACLE = "0x547a514d5e3769680Ce22B2361c10Ea13619e8a9";
export const APE_USD_CHAINLINK_ORACLE = "0xD10aBbC76679a20055E167BB80A24ac851b37056";
export const BTC_USD_CHAINLINK_ORACLE = "0xF4030086522a5bEEa4988F8cA5B36dbC97BeE88c";
export const CRV_USD_CHAINLINK_ORACLE = "0xCd627aA160A6fA45Eb793D19Ef54f5062F20f33f";
export const CVX_USD_CHAINLINK_ORACLE = "0xd962fC30A72A84cE50161031391756Bf2876Af5D";
export const ETH_USD_CHAINLINK_ORACLE = "0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419";
export const FIL_ETH_CHAINLINK_ORACLE = "0x0606Be69451B1C9861Ac6b3626b99093b713E801";
export const FIL_USD_CHAINLINK_ORACLE = "0x1A31D42149e82Eb99777f903C08A2E41A00085d3";
export const FRAX_USD_CHAINLINK_ORACLE = "0xB9E1E3A9feFf48998E45Fa90847ed4D467E8BcfD";
export const FXS_USD_CHAINLINK_ORACLE = "0x6Ebc52C8C1089be9eB3945C4350B68B8E4C2233f";
export const LDO_ETH_CHAINLINK_ORACLE = "0x4e844125952D32AcdF339BE976c98E22F6F318dB";
export const LINK_USD_CHAINLINK_ORACLE = "0x2c1d072e956AFFC0D435Cb7AC38EF18d24d9127c";
export const MKR_ETH_CHAINLINK_ORACLE = "0x24551a8Fb2A7211A25a17B1481f043A8a8adC7f2";
export const MKR_USD_CHAINLINK_ORACLE = "0xec1D1B3b0443256cc3860e24a46F108e699484Aa";
export const OHMV2_ETH_CHAINLINK_ORACLE = "0x9a72298ae3886221820B1c878d12D872087D3a23";
export const UNI_USD_CHAINLINK_ORACLE = "0x553303d460EE0afB37EdFf9bE42922D8FF63220e";
export const USDC_USD_CHAINLINK_ORACLE = "0x8fFfFfd4AfB6115b954Bd326cbe7B4BA576818f6";

// Convex
export const FRAXLEND_WRAPPER_FACTORY = "0xe5Ca8CB440A6f9F6fA1D535D94A839CED59D9942";

// Arbitrum Cross Chain contracts on Mainnet
export const ARBITRUM_DELAYED_INBOX = "0x4Dbd4fc535Ac27206064B68FfCf827b0A60BAB3f";
