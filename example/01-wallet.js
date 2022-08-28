const {ethers} = require('ethers')
const fs = require('fs')

const main = async() =>{
    const wallet =  ethers.Wallet.createRandom();
    const address = wallet.address; 
    const priKey = wallet.privateKey;
    console.log(priKey)
    console.log(address);

    const password = "bar";
    const keystore = await wallet.encrypt(password);

    // 1. not use progress 
    console.log('export keystore：' + keystore);
    
    
    // 2. use  progress to show 
    // function callback(percent) {
    //     console.log("Encrypting: " + parseInt(percent * 100) + "% complete");
    // }
    // const keystoreOfCallBack = await wallet.encrypt(password, callback);
    // console.log('export keystoreOfCallBack : ' + keystoreOfCallBack);

    fs.writeFileSync("wallet.json", keystore )
    console.log('generate wallet wallet.json  Done')

}
main()