require('@nomiclabs/hardhat-waffle');

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.17",
  },
  paths: {
    artifacts: './client/src/artifacts',
  }
};
