const {ethers}=require("ethers");
const hre = require("hardhat");
const MytokenData=require("../artifacts/src/MyToken.sol/MyToken.json");
const PurposeWrapperData=require("../artifacts/src/PurposeWrapper.sol/PurposeWrapper.json");
const ConditionData=require("../artifacts/src/Condition.sol/Condition.json");
const abi=require('./EAS_Abi.json');

async function main(){
    const provider=new ethers.providers.JsonRpcProvider("http://127.0.0.1:8545");

    const user1=await(provider.getSigner(0)).getAddress();
    const user2=await(provider.getSigner(1)).getAddress();
    const user3=await(provider.getSigner(2)).getAddress();
    const user4=await(provider.getSigner(3)).getAddress();
    const user5=await(provider.getSigner(4)).getAddress();

    const MyTokenfactory= new ethers.ContractFactory(MytokenData.abi,MytokenData.bytecode,provider.getSigner(0));
    const PurposeWrapperfactory= new ethers.ContractFactory(PurposeWrapperData.abi,PurposeWrapperData.bytecode,provider.getSigner(0));
    const ConditionFactory=new ethers.ContractFactory(ConditionData.abi,ConditionData.bytecode,provider.getSigner(0));

    const mytoken=await MyTokenfactory.deploy();
    console.log("MyToken deployed At",mytoken.address);

    const purposewrapper=await PurposeWrapperfactory.deploy(mytoken.address,"MTK","MYTOKEN");
    console.log("PurposeWrapper deployed At",purposewrapper.address);
    
    const condition=await ConditionFactory.deploy();
    console.log("Condition contract deployed at:",condition.address);

    const mintTx=await mytoken.connect(provider.getSigner(0)).mint(1000);
    await mintTx.wait();
    console.log("Tokens minted:",Number(await mytoken.balanceOf(user1)));

    const allowTx=await mytoken.connect(provider.getSigner(0)).approve(purposewrapper.address,200);
    await allowTx.wait();

    const transferTx=await purposewrapper.connect(provider.getSigner(0)).depositFor(user2,200,condition.address);
    await transferTx.wait();

    console.log("Balance of user1",Number(await mytoken.balanceOf(user1)));
    console.log("Balance of user2",Number(await purposewrapper.balanceOf(user2)));

    const EAS_Contract=new ethers.Contract("0xC2679fBD37d54388Ce493F1DB75320D236e1815e",abi.abi,provider);
    const attestation_data={
        schema:"0xf1d8f661b1c7b1af38d562cdbed544865c9c729a81d81ae5eb3eb8cfb1bfcb6f",
        data:{
            recipient: user3, 
            expirationTime: 0,
            revocable: true,
            refUID: "0x0000000000000000000000000000000000000000000000000000000000000000", 
            data: ethers.utils.defaultAbiCoder.encode(['uint256','bool'],[78,true]), 
            value: 0
        }
    }
    // User4 will attest user3 

    // const attestTx=await EAS_Contract.connect(provider.getSigner(3)).attest(attestation_data);
    // console.log(await attestTx.wait());

    //0x4bb045dace541d883e081f8b680b9138a4f18468d62f0c0950e057e8560f4e13

    // const attest_data=await EAS_Contract.getAttestation("0x4bb045dace541d883e081f8b680b9138a4f18468d62f0c0950e057e8560f4e13");
    // console.log(attest_data);

    const data=ethers.utils.defaultAbiCoder.encode(["address","uint256","bytes32"],[user3,100,"0x4bb045dace541d883e081f8b680b9138a4f18468d62f0c0950e057e8560f4e13"]);

    const withdrawToTx=await purposewrapper.connect(provider.getSigner(1)).withdrawTo(user3,100,0,data);
    await withdrawToTx.wait();

    // INTERNAL TRANSFERS

    // const tx4=await purposewrapper.connect(provider.getSigner(1)).transfer(user3,100,0);
    // await tx4.wait();

    // const tx5=await purposewrapper.connect(provider.getSigner(1)).transfer(user3,100,0);
    // await tx5.wait();

    // const con=await purposewrapper.getCondition(user3);
    // console.log(con);


    console.log("Balance of user3",Number(await mytoken.balanceOf(user3)))
    console.log("Balance of user2",Number(await purposewrapper.balanceOf(user2)))


}

main();
