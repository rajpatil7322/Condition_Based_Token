// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Script, console2} from "forge-std/Script.sol";
import {MyToken} from "../src/MyToken.sol";
import {PurposeWrapper} from "../src/PurposeWrapper.sol";
import {IERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import {Condition} from "../src/Condition.sol";

contract CounterScript is Script {
    MyToken public mytoken;
    PurposeWrapper  public purposewrapper;
    Condition public condition;

    address public addr1;
    address public addr2;
    address public addr3;
    // function setUp() public {
    //     addr1=vm.addr(1);
    //     addr2=vm.addr(2);
    //     addr3=vm.addr(3);
    //     mytoken=new MyToken();
    //     vm.prank(addr1);
    //     mytoken.mint(1000);
    //     purposewrapper=new PurposeWrapper(IERC20(address(mytoken)),"MyToken","MTK");
    //     vm.prank(addr1);
    //     mytoken.approve(address(purposewrapper),1000);
    //     condition=new Condition();
    //     condition.addCondition(addr3);
    //     vm.prank(addr1);
    //     purposewrapper.depositFor(addr2,200,address(condition));
    //     vm.prank(addr2);
    //     purposewrapper.withdrawTo(addr3,100,0);
    //     console2.log(purposewrapper.balanceOf(addr2));
    // }

    function run() public {
        uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");
        vm.startBroadcast(deployerPrivateKey);
        mytoken=new MyToken();
        vm.stopBroadcast();
    }
}
