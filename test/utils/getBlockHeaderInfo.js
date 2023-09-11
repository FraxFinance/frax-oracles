var exec = require("child_process").exec;

const [_blockNumber, _mainnetUrl] = process.argv.slice(2);

function convertHeaderFields(headerFields) {
  for (var i = 0; i < headerFields.length; i++) {
    var field = headerFields[i];
    if (field == "0x0") field = "0x";
    if (field.length % 2 == 1) field = "0x0" + field.substring(2);
    headerFields[i] = field;
  }
}

const getBlockHeaderInfo = () => {
  exec(
    "cast rpc eth_getBlockByNumber 0x" + parseInt(_blockNumber).toString(16) + " false --rpc-url " + _mainnetUrl,
    (error, stdout, stderr) => {
      if (error !== null) {
        console.log("exec error: " + error);
        return;
      }

      let headerFields = [];
      let block = JSON.parse(stdout);

      headerFields.push(block.parentHash);
      headerFields.push(block.sha3Uncles);
      headerFields.push(block.miner);
      headerFields.push(block.stateRoot);
      headerFields.push(block.transactionsRoot);
      headerFields.push(block.receiptsRoot);
      headerFields.push(block.logsBloom);
      headerFields.push(block.difficulty);
      headerFields.push(block.number);
      headerFields.push(block.gasLimit);
      headerFields.push(block.gasUsed);
      headerFields.push(block.timestamp);
      headerFields.push(block.extraData);
      headerFields.push(block.mixHash);
      headerFields.push(block.nonce);
      headerFields.push(block.baseFeePerGas);
      if (block.withdrawalsRoot) {
        headerFields.push(block.withdrawalsRoot);
      }

      convertHeaderFields(headerFields);

      exec("cast --to-rlp '" + JSON.stringify(headerFields) + "'", (error, stdout, stderr) => {
        if (error !== null) {
          console.log("exec error: " + error);
          return;
        }
        let rlpHeader = stdout.replace(/^\s+|\s+$/g, "");
        process.stdout.write(rlpHeader);
      });
    },
  );
};
getBlockHeaderInfo();
