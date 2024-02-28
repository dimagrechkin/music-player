const fs = require('fs');

(async ()=> {
  try {
    const Polygonum = await hre.ethers.getContractFactory("Polygonum");
   
    fs.writeFile('bytecode.json', Polygonum.bytecode, function(err) {
      if (err) throw err;
      console.log('complete');
      });
    const polygonumInstance = await Polygonum.deploy();

    await polygonumInstance.deployed();

    console.log(`Deploy contract at ${polygonumInstance.address }`);
  } catch (error) {
    console.error(error);
    process.exitCode = 1;
  }
})(); 
