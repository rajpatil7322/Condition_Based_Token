// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {LibFacetA} from "../libraries/LibFacetA.sol";


contract FacetA {

    function runCondition(address _to,uint256 amount,bytes memory data) external view returns(bool){
        require(_to==0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC);
        require(amount<=100);
        return true;
    }
}