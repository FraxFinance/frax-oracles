const { Decimal } = require("decimal.js");
const { BigNumber, utils } = require("ethers");

const [_gOhmIndex, _gOhmDecimals, _ohmV2EthPrice, _ohmV2EthDecimals, _ethUsdPrice, _ethUsdDecimals, _outputDecimals] =
  process.argv.slice(2);

const calculatePrice = () => {
  const gOhmIndex = new Decimal(_gOhmIndex).div(new Decimal(10).pow(_gOhmDecimals));
  const ohmV2EthPrice = new Decimal(_ohmV2EthPrice).div(new Decimal(10).pow(_ohmV2EthDecimals));
  const ethUsdPrice = new Decimal(_ethUsdPrice).div(new Decimal(10).pow(_ethUsdDecimals));

  const price = ohmV2EthPrice.mul(gOhmIndex).mul(ethUsdPrice);
  console.log(
    utils.defaultAbiCoder.encode(
      ["int256"],
      [
        price
          .mul(new Decimal(10).pow(new Decimal(_outputDecimals)))
          .round()
          .toFixed(),
      ],
    ),
  );
};
calculatePrice();
