// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Test, console2} from "forge-std/Test.sol";
import {Counter} from "../src/Counter.sol";
import {MyToken} from "../src/MyToken.sol";
import {PurposeWrapper} from "../src/PurposeWrapper.sol";
import {IERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import {Condition} from "../src/Condition.sol";

contract CounterTest is Test {
    MyToken public mytoken;
    PurposeWrapper public purposewrapper;
    Condition public condition;
    
    address public addr1;
    address public addr2;
    address public addr3;

    function setUp() public {
        addr1=vm.addr(1);
        addr2=vm.addr(2);
        addr3=vm.addr(3);
        vm.prank(addr1);
        mytoken=new MyToken();
        purposewrapper=new PurposeWrapper(IERC20(address(mytoken)),"Mytoken","MTK");
        condition=new Condition();
    }

    function test_mint_and_approval() public {
       vm.prank(addr1);
       mytoken.mint(1000);
       assertEq(mytoken.balanceOf(addr1),1000);
       vm.prank(addr1);
       mytoken.approve(address(purposewrapper),1000);
       assertEq(mytoken.allowance(addr1,address(purposewrapper)),1000);
    }

    function test_transfer_to_purposewrapper() public {
        test_mint_and_approval();
        vm.prank(addr1);
        condition.runCondition(addr3,100,addr3);
        vm.prank(addr1);
        purposewrapper.depositFor(addr2,200,address(condition));
        assertEq(purposewrapper.balanceOf(addr2),200);
        assertEq(mytoken.balanceOf(addr1),800);
    }

    function test_purposewrapper_condition() public {
        test_transfer_to_purposewrapper();
        console2.log(purposewrapper.balanceOf(addr2));
        vm.prank(addr2);
        purposewrapper.withdrawTo(addr3,100,0);
    }

    // function testFuzz_SetNumber(uint256 x) public {
    //     counter.setNumber(x);
    //     assertEq(counter.number(), x);
    // }
}
