const ethers = require('ethers')
const provider = new ethers.providers.JsonRpcProvider(`https://kovan.infura.io/v3/{infura.key}`)

// two address for transfer 
const account1 = ''
const account2 = ''

const privateKey = ''
const wallet = new ethers.Wallet(privateKey, provider)


const ERC20_ABI = [
    "function balanceOf(address) view returns (uint)",
    "function transfer(address to, uint amount) returns (bool)"
]

// contract address , call this address to send tx and read data
const address = ''

const contract = new ethers.Contract(address, ERC20_ABI, provider);


const main = async () => {
    var balanceOfSender = await contract.balanceOf(account1)
    var balanceOfReceiver = await contract.balanceOf(account2)

    console.log(`balance of sender is ${balanceOfSender}`)
    console.log(`balance of receiver is ${balanceOfReceiver}`)


    const contractWallet = contract.connect(wallet);
    const transfer = await contractWallet.transfer(account2, 605);
    await transfer.wait()


    balanceOfSender = await contract.balanceOf(account1)
    balanceOfReceiver = await contract.balanceOf(account2)

    console.log(`balance of sender is ${balanceOfSender}`)
    console.log(`balance of receiver is ${balanceOfReceiver}`)
}


main()
    .then( ()=>process.exit(0) )
    .catch((err)=>{
        console.error(err);
        process.exit(1)
})