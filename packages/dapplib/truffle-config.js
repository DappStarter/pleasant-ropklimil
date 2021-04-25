require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'idea glimpse flame traffic black deliver remind evil idea fork bottom suspect'; 
let testAccounts = [
"0x3e4397edbe71492cf28ff9736bf1b55d97fc3da41df0182bf8b13aff3c17655f",
"0xdf8bb5e0b37d04bcb2b336de7b851c26fcad4cf71b60441bdbcb6bbe41b81eaf",
"0x3f9b5d7457fd764fb3e876914060196c4af4a2b6870b472efe12d111e570fbf8",
"0xb4835765cb5e660a4bef32d26ef2372bc6a672cb5faba1a7a0d61a6ddd47fef6",
"0xf43316c8eed6f905c55148f0449749f0cb3a09176018c372e7610a068128fba8",
"0x69f6d387a44305767d44cdb4b3786f3af65963ae8d9280910a20dc219ffd4ea0",
"0x000872488a3a9ab1c6524a3e3e7f3dfe029a1195b9fe0a671398b7c9c1c7ae0c",
"0x3660ff767bf81cb4e09681076ce0280fb04426bce1d44c09c6dc8e54e29685a2",
"0x152b413962595a6495d894518a6a2a301adbd19d859f72fe38b8a651c19dbe49",
"0x9d121699d449a4e89808b3c17e699da72b64fcb0ac23e0772a0d05cb6a3ae02f"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


