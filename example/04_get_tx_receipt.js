const ethers = require('ethers')
const provider = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/c33a0fa6c48a40c29ff4a43272d9373d`)


const main = async () => {
    const txReceipt = await provider.getTransactionReceipt("0x9597257419ac52991537664589316bac0bdafaddb302fe4e0dd31d938d81b719");
    console.log(txReceipt)

    //
    console.log(txReceipt.from)
    console.log(txReceipt.to)
    console.log(txReceipt.transactionHash)
}


main().then(() => process.exit(0)).catch((err) => {
    console.error(err);
    process.exit(1)
})