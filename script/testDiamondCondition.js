const {ethers}=require("ethers");
const hre = require("hardhat");
const DiamondConditionData=require("../artifacts/src/Condition/DiamondCondition.sol/Diamond.json");
const FacetAData=require("../artifacts/src/Condition/facets/FacetA.sol/FacetA.json");
const FacetBData=require("../artifacts/src/Condition/facets/FacetB.sol/FacetB.json");


async function main(){
    const provider=new ethers.providers.JsonRpcProvider("http://127.0.0.1:8545");

    const user1=await(provider.getSigner(0)).getAddress();

    const DiamondConditionFactory=new ethers.ContractFactory(DiamondConditionData.abi,DiamondConditionData.bytecode,provider.getSigner(0));
    const FacetAFactory=new ethers.ContractFactory(FacetAData.abi,FacetAData.bytecode,provider.getSigner(0));

    const diamondcondition=await DiamondConditionFactory.deploy(user1);
    console.log("diamondcondition contract deployed at:",diamondcondition.address);

    const facetAcondition=await FacetAFactory.deploy();
    console.log("FacetAcondition contract deployed at:",facetAcondition.address);

    const addfacet=await diamondcondition.connect(provider.getSigner(0)).diamondCut(
        {
            facetAddress:facetAcondition.address,
            functionSelectors:[ethers.utils.id("runCondition(address,uint256,bytes)").substring(0,10)]
        }
    )

    await addfacet.wait();

    const proxy=new ethers.Contract(diamondcondition.address,FacetAData.abi,provider);
    const data=ethers.utils.defaultAbiCoder.encode(["address","uint256"],["0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC",200,]);
        
    const checkTx=await proxy.connect(provider.getSigner(0)).runCondition("0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC",100,data);
    console.log(await checkTx);

    const removeFunctions=await diamondcondition.connect(provider.getSigner(0)).removeFunctions(ethers.constants.AddressZero,[ethers.utils.id("runCondition(address,uint256,bytes)").substring(0,10)])
    await removeFunctions.wait();

    const FacetBFactory=new ethers.ContractFactory(FacetBData.abi,FacetBData.bytecode,provider.getSigner(0));
    const facetBcondition=await FacetBFactory.deploy();
    console.log("FacetBCondition contract deployed at:",facetBcondition.address);

    const addfacetB=await diamondcondition.connect(provider.getSigner(0)).diamondCut(
        {
            facetAddress:facetBcondition.address,
            functionSelectors:[
                ethers.utils.id("runCondition(address,uint256,bytes)").substring(0,10),
                ethers.utils.id("setEasAddress(address)").substring(0,10)
            ]
        }
    )
    await addfacetB.wait();

    const proxyB=new ethers.Contract(diamondcondition.address,FacetBData.abi,provider);
    const data1=ethers.utils.defaultAbiCoder.encode(["bytes32"],["0x2aa6719212ed2f3dae9024bc53e435f70c9a22a01f265bbc9d147c4dda3e5355"]);
    
    const setaddressTx=await proxyB.connect(provider.getSigner(0)).setEasAddress("0xC2679fBD37d54388Ce493F1DB75320D236e1815e");
    await setaddressTx.wait();

    const chec=await proxyB.connect(provider.getSigner(0)).runCondition("0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC",100,data1);
    console.log(await chec);

   
}

main();