require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom glide fresh tragic name renew mad snake good kangaroo army gentle'; 
let testAccounts = [
"0xc65bd9c2d9079a6d577be32db393ff88f8c8ff6f0fb3ec1297ae502e282ec37c",
"0x225085ca0d596f8ec214cfc0001a9f075c3209fd3696002832a6c9efcdc1a02a",
"0x3f072f0109beefc1cede2096a0cbe4f1544c90bd3b50d47db82034e03229e2a3",
"0x98b21dd171c8a99e0de99a2d2853ba03116a442d40d910e4a9e2eabc49ae57ad",
"0x582d61b4fc77cacbd0c136519a9618fee4625684dd1b76bb72f3f158face0fec",
"0x95e4cb242f688d4f0f96a9256d98c625ca65e6344c3887e5ccf13b06eafa9390",
"0x907adf40ce64eb88ac68ef2ae02c350c7391b1c25c63f58c1b7b5b03e0985e34",
"0x2b82461fd39c3f12d56ab0fb6c0b87a51c0bdb1b51605e89328d7f1d85ff3263",
"0xf7c87d99f049a44d9ad4053a7aa6c7752f6dc43036b759211bcb53edc7a2eb4c",
"0xc2ff6505b6ab0eb488a7a52dcd4060378c40000b5d03130f6029408ef8580939"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

