"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ISchemaResolver__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                components: [
                    {
                        internalType: "bytes32",
                        name: "uid",
                        type: "bytes32",
                    },
                    {
                        internalType: "bytes32",
                        name: "schema",
                        type: "bytes32",
                    },
                    {
                        internalType: "uint64",
                        name: "time",
                        type: "uint64",
                    },
                    {
                        internalType: "uint64",
                        name: "expirationTime",
                        type: "uint64",
                    },
                    {
                        internalType: "uint64",
                        name: "revocationTime",
                        type: "uint64",
                    },
                    {
                        internalType: "bytes32",
                        name: "refUID",
                        type: "bytes32",
                    },
                    {
                        internalType: "address",
                        name: "recipient",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "attester",
                        type: "address",
                    },
                    {
                        internalType: "bool",
                        name: "revocable",
                        type: "bool",
                    },
                    {
                        internalType: "bytes",
                        name: "data",
                        type: "bytes",
                    },
                ],
                internalType: "struct Attestation",
                name: "attestation",
                type: "tuple",
            },
        ],
        name: "attest",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [],
        name: "isPayable",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            {
                components: [
                    {
                        internalType: "bytes32",
                        name: "uid",
                        type: "bytes32",
                    },
                    {
                        internalType: "bytes32",
                        name: "schema",
                        type: "bytes32",
                    },
                    {
                        internalType: "uint64",
                        name: "time",
                        type: "uint64",
                    },
                    {
                        internalType: "uint64",
                        name: "expirationTime",
                        type: "uint64",
                    },
                    {
                        internalType: "uint64",
                        name: "revocationTime",
                        type: "uint64",
                    },
                    {
                        internalType: "bytes32",
                        name: "refUID",
                        type: "bytes32",
                    },
                    {
                        internalType: "address",
                        name: "recipient",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "attester",
                        type: "address",
                    },
                    {
                        internalType: "bool",
                        name: "revocable",
                        type: "bool",
                    },
                    {
                        internalType: "bytes",
                        name: "data",
                        type: "bytes",
                    },
                ],
                internalType: "struct Attestation[]",
                name: "attestations",
                type: "tuple[]",
            },
            {
                internalType: "uint256[]",
                name: "values",
                type: "uint256[]",
            },
        ],
        name: "multiAttest",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [
            {
                components: [
                    {
                        internalType: "bytes32",
                        name: "uid",
                        type: "bytes32",
                    },
                    {
                        internalType: "bytes32",
                        name: "schema",
                        type: "bytes32",
                    },
                    {
                        internalType: "uint64",
                        name: "time",
                        type: "uint64",
                    },
                    {
                        internalType: "uint64",
                        name: "expirationTime",
                        type: "uint64",
                    },
                    {
                        internalType: "uint64",
                        name: "revocationTime",
                        type: "uint64",
                    },
                    {
                        internalType: "bytes32",
                        name: "refUID",
                        type: "bytes32",
                    },
                    {
                        internalType: "address",
                        name: "recipient",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "attester",
                        type: "address",
                    },
                    {
                        internalType: "bool",
                        name: "revocable",
                        type: "bool",
                    },
                    {
                        internalType: "bytes",
                        name: "data",
                        type: "bytes",
                    },
                ],
                internalType: "struct Attestation[]",
                name: "attestations",
                type: "tuple[]",
            },
            {
                internalType: "uint256[]",
                name: "values",
                type: "uint256[]",
            },
        ],
        name: "multiRevoke",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [
            {
                components: [
                    {
                        internalType: "bytes32",
                        name: "uid",
                        type: "bytes32",
                    },
                    {
                        internalType: "bytes32",
                        name: "schema",
                        type: "bytes32",
                    },
                    {
                        internalType: "uint64",
                        name: "time",
                        type: "uint64",
                    },
                    {
                        internalType: "uint64",
                        name: "expirationTime",
                        type: "uint64",
                    },
                    {
                        internalType: "uint64",
                        name: "revocationTime",
                        type: "uint64",
                    },
                    {
                        internalType: "bytes32",
                        name: "refUID",
                        type: "bytes32",
                    },
                    {
                        internalType: "address",
                        name: "recipient",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "attester",
                        type: "address",
                    },
                    {
                        internalType: "bool",
                        name: "revocable",
                        type: "bool",
                    },
                    {
                        internalType: "bytes",
                        name: "data",
                        type: "bytes",
                    },
                ],
                internalType: "struct Attestation",
                name: "attestation",
                type: "tuple",
            },
        ],
        name: "revoke",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "payable",
        type: "function",
    },
];
class ISchemaResolver__factory {
    static abi = _abi;
    static createInterface() {
        return new ethers_1.Interface(_abi);
    }
    static connect(address, runner) {
        return new ethers_1.Contract(address, _abi, runner);
    }
}
exports.ISchemaResolver__factory = ISchemaResolver__factory;
//# sourceMappingURL=ISchemaResolver__factory.js.map