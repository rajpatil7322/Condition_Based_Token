/// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;
import { IEAS, AttestationRequest,AttestationRequestData } from "@ethereum-attestation-service/eas-contracts/contracts/IEAS.sol";
import { NO_EXPIRATION_TIME, EMPTY_UID,Attestation } from "@ethereum-attestation-service/eas-contracts/contracts/Common.sol";
import { ISchemaRegistry,SchemaRecord } from "@ethereum-attestation-service/eas-contracts/contracts/ISchemaRegistry.sol";
import { ISchemaResolver } from "@ethereum-attestation-service/eas-contracts/contracts/resolver/ISchemaResolver.sol";

library LibFacetB {
    bytes32 constant STORAGE_POSITION = keccak256("facet.b.diamond.storage");

    struct Storage {
        address eas;
    }

    function getStorage() internal pure returns (Storage storage ds) {
        bytes32 position = STORAGE_POSITION;
        assembly {
            ds.slot := position
        }
    }

    function addEasAddress(address _eas) internal returns(bool){
        Storage storage ds=getStorage();
        ds.eas=_eas;
        return true;
    }
}