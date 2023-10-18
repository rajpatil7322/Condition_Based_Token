// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract Condition {

    address public to;
    function addCondition(address _to) external{
        to=_to;
    }

    function runCondition(address _to,uint256 value) external returns(bool){
        require(to==_to);
        require(value<=100);
        return true;
    }

}