// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {LibFacetB} from "../libraries/LibFacetB.sol";
import { NO_EXPIRATION_TIME, EMPTY_UID,Attestation } from "@ethereum-attestation-service/eas-contracts/contracts/Common.sol";
import { IEAS, AttestationRequest,AttestationRequestData } from "@ethereum-attestation-service/eas-contracts/contracts/IEAS.sol";

contract FacetB {

    function setEasAddress(address _eas) external{
        LibFacetB.addEasAddress(_eas);
    }

    function getRecepient(bytes32 attestUid) internal view returns(Attestation memory){
       return IEAS(LibFacetB.getStorage().eas).getAttestation(attestUid);
    }

    function runCondition(address _to,uint256 amount,bytes memory data) external view returns(bool){
        (bytes32 uid)=abi.decode(data,(bytes32));
        require(_to==0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC);
        require(amount<=100);
        require(getRecepient(uid).attester==0x90F79bf6EB2c4f870365E785982E1f101E93b906);
        require(getRecepient(uid).recipient==_to);
        (uint256 score,bool isdev)=abi.decode(getRecepient(uid).data,(uint256,bool));
        require(score >=70);
        require(isdev==true);
        return true;
    }
}