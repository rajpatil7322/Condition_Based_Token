// SPDX-License-Identifier: MIT

pragma solidity 0.8.20;

import { IEAS, AttestationRequest,AttestationRequestData } from "@ethereum-attestation-service/eas-contracts/contracts/IEAS.sol";
import { NO_EXPIRATION_TIME, EMPTY_UID,Attestation } from "@ethereum-attestation-service/eas-contracts/contracts/Common.sol";
import { ISchemaRegistry,SchemaRecord } from "@ethereum-attestation-service/eas-contracts/contracts/ISchemaRegistry.sol";
import { ISchemaResolver } from "@ethereum-attestation-service/eas-contracts/contracts/resolver/ISchemaResolver.sol";


 // EAS contract  0xC2679fBD37d54388Ce493F1DB75320D236e1815e
  // Schema 0xf1d8f661b1c7b1af38d562cdbed544865c9c729a81d81ae5eb3eb8cfb1bfcb6f
  // 0x0000000000000000000000000000000000000000
contract ExampleAttester {
    error InvalidEAS();

    IEAS private  _eas=IEAS(0xC2679fBD37d54388Ce493F1DB75320D236e1815e);

    function attestUint(bytes32 schema,address _recipient,uint256 amount,bool _isdeveloper) external returns (bytes32) {
        return
            _eas.attest(
                AttestationRequest({
                    schema: schema,
                    data: AttestationRequestData({
                        recipient: _recipient, // No recipient
                        expirationTime: NO_EXPIRATION_TIME, // No expiration time
                        revocable: true,
                        refUID: EMPTY_UID, // No references UI
                        data: abi.encode(amount,_isdeveloper), 
                        value: 0 // No value/ETH
                    })
                })
            );
    }

    function getRecepient(bytes32 attestUid) public view returns(address){
        Attestation memory data=_eas.getAttestation(attestUid);
        return data.recipient;
    }
}