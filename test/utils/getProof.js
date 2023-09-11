var exec = require("child_process").exec;
const { utils } = require("ethers");

const [_fraxOracleLayer1Address, _blockNumber, _storageSlot, _mainnetUrl] = process.argv.slice(2);

const getProof = () => {
  exec(
    "cast proof " +
      _fraxOracleLayer1Address +
      " -B " +
      _blockNumber +
      " 0x" +
      BigInt(_storageSlot).toString(16) +
      " --rpc-url " +
      _mainnetUrl,
    (error, stdout, stderr) => {
      if (error !== null) {
        console.log("exec error: " + error);
        return;
      }

      let proof = JSON.parse(stdout);

      process.stdout.write(
        utils.defaultAbiCoder.encode(["bytes[]", "bytes[]"], [proof.accountProof, proof.storageProof[0].proof]),
      );
    },
  );
};
getProof();
