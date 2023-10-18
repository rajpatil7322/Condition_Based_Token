// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract Condition {


    function runCondition(address to,uint256 value,address from) external returns(bool){
        require(to==from);
        require(value<=100);
        return true;
    }
}