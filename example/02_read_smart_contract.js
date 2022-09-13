const ethers = require('ethers')
const provider = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/{infura.key}`)


const ERC20_ABI = [
    "function name() view returns (string)",
    "function symbol() view returns (string) ",
    "function totalSupply() view returns (uint256) ",
    "function decimals() view returns (uint8) ",
]

const address = '0x6B175474E89094C44Da98b954EedeAC495271d0F'
const contract = new ethers.Contract(address, ERC20_ABI, provider)

const main = async () => {
    const name = await contract.name()
    console.log(`the contract name is     ${name} `)

    const symbol = await contract.symbol();
    console.log(`the contract symbol is     ${symbol} `)


    const totalSupply = await contract.totalSupply();
    console.log(`the contract totalSupply is     ${totalSupply} `)

    const decimals = await contract.decimals();
    console.log(`the contract decimals is     ${decimals} `)
}


main().then(()=>process.exit(0)).catch((err)=>{
    console.error(err);
    process.exit(1)
})