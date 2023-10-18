// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Test, console2} from "forge-std/Test.sol";
import {Counter} from "../src/Counter.sol";
import {MyToken} from "../src/MyToken.sol";

contract CounterTest is Test {
    MyToken public myToken;

    function setUp() public {
        mytoken=new MyToken();
    }

    function test_Increment() public {
        address owner=mytoken.owner();
        console2.log(owner);
    }

    function testFuzz_SetNumber(uint256 x) public {
        counter.setNumber(x);
        assertEq(counter.number(), x);
    }
}
