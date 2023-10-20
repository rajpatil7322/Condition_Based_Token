// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Test, console2} from "forge-std/Test.sol";
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
    address public addr4;

    function setUp() public {
        addr1=vm.addr(1);
        addr2=vm.addr(2);
        addr3=vm.addr(3);
        addr4=vm.addr(4);
        console2.log(addr1);

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

    // function test_transfer_to_purposewrapper() public {
    //     test_mint_and_approval();
    //     vm.prank(addr1);
    //     condition.addCondition(addr3);
    //     vm.prank(addr1);
    //     purposewrapper.depositFor(addr2,200,address(condition));
    //     assertEq(purposewrapper.balanceOf(addr2),200);
    //     assertEq(mytoken.balanceOf(addr1),800);
    // }

    // function test_purposewrapper_condition() public {
    //     test_transfer_to_purposewrapper();
    //     vm.prank(addr2);
    //     purposewrapper.withdrawTo(addr3,100,0);
    //     assertEq(purposewrapper.balanceOf(addr2),100);
    //     assertEq(mytoken.balanceOf(addr3),100);
    // }

    // function test_purposewrapper_internal_transfer() public {
    //     test_transfer_to_purposewrapper();
    //     vm.prank(addr2);
    //     purposewrapper.transfer(addr4,100,0);
    //     assertEq(purposewrapper.balanceOf(addr2),100);
    //     assertEq(purposewrapper.balanceOf(addr4),100);
    // }

    // function test_transfer_after_internal_transfer() public{
    //     test_purposewrapper_internal_transfer();
    //     vm.prank(addr2);
    //     purposewrapper.withdrawTo(addr3,100,0);
    //     vm.prank(addr4);
    //     purposewrapper.withdrawTo(addr3,100,0);
    //     assertEq(purposewrapper.balanceOf(addr2),0);
    //     assertEq(purposewrapper.balanceOf(addr4),0);
    //     assertEq(mytoken.balanceOf(addr3),200);
    // }

    // function testFuzz_SetNumber(uint256 x) public {
    //     vm.prank(addr1);
    //     mytoken.mint(x);
    //     assertEq(mytoken.balanceOf(addr1), x);
    // }
}
