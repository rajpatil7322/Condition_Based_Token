// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import { IEAS, AttestationRequest,AttestationRequestData } from "@ethereum-attestation-service/eas-contracts/contracts/IEAS.sol";
import { NO_EXPIRATION_TIME, EMPTY_UID,Attestation } from "@ethereum-attestation-service/eas-contracts/contracts/Common.sol";
import { ISchemaRegistry,SchemaRecord } from "@ethereum-attestation-service/eas-contracts/contracts/ISchemaRegistry.sol";
import { ISchemaResolver } from "@ethereum-attestation-service/eas-contracts/contracts/resolver/ISchemaResolver.sol";

contract Condition {

    IEAS private  _eas=IEAS(0xC2679fBD37d54388Ce493F1DB75320D236e1815e);

    function getRecepient(bytes32 attestUid) internal view returns(Attestation memory){
       return _eas.getAttestation(attestUid);
       
    }

    function runCondition(bytes memory data) external view returns(bool){
        (address to,uint256 amount,bytes32 uid)=abi.decode(data,(address,uint256,bytes32));
        require(to==0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC);
        require(amount<=100);
        require(getRecepient(uid).attester==0x90F79bf6EB2c4f870365E785982E1f101E93b906);
        require(getRecepient(uid).recipient==to);
        (uint256 score,bool isdev)=abi.decode(getRecepient(uid).data,(uint256,bool));
        require(score >=70);
        require(isdev==true);
        return true;
    }

}