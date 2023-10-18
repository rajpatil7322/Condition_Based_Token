// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Test, console2} from "forge-std/Test.sol";
import {Counter} from "../src/Counter.sol";
import {MyToken} from "../src/MyToken.sol";
import {PurposeWrapper} from "../src/PurposeWrapper.sol";
import {IERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract CounterTest is Test {
    MyToken public mytoken;
    PurposeWrapper public purposewrapper;
    
    address public addr1;
    address public addr2;
    address public addr3;

    function setUp() public {
        addr1=vm.addr(1);
        addr2=vm.addr(2);
        addr3=vm.addr(3);
        vm.prank(addr1);
        mytoken=new MyToken();
        // purposewrapper=new PurposeWrapper(IERC20(address(mytoken)),"Mytoken","MTK");
        console2.log(address(mytoken));
    }

    // function test_mint_approval() public {
    //     mytoken.mint(1000);
    //     assertEq(mytoken.totalSupply(), 1000);
    //     mytoken.approve(address(purposewrapper),1000);
    //     uint256 num=mytoken.allowance(mytoken.owner(),address(purposewrapper));
    //     console2.log(num);
    //     // assertEq(mytoken.allowance(mytoken.owner(),address(purposewrapper)),1000);
    // }

    // function testFuzz_SetNumber(uint256 x) public {
    //     counter.setNumber(x);
    //     assertEq(counter.number(), x);
    // }
}
