import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, AddressLike, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../../common";
import type { RevocationResolver, RevocationResolverInterface } from "../../../../contracts/resolver/examples/RevocationResolver";
type RevocationResolverConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class RevocationResolver__factory extends ContractFactory {
    constructor(...args: RevocationResolverConstructorParams);
    getDeployTransaction(eas: AddressLike, overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(eas: AddressLike, overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<RevocationResolver & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): RevocationResolver__factory;
    static readonly bytecode = "0x61010060405234801561001157600080fd5b506040516109fe3803806109fe83398101604081905261003091610079565b6001608052600260a052600060c052806001600160a01b038116610067576040516341bc07ff60e11b815260040160405180910390fd5b6001600160a01b031660e052506100a9565b60006020828403121561008b57600080fd5b81516001600160a01b03811681146100a257600080fd5b9392505050565b60805160a05160c05160e05161091c6100e26000396000610530015260006101f2015260006101c9015260006101a0015261091c6000f3fe6080604052600436106100745760003560e01c8063ce46e0461161004e578063ce46e04614610113578063e49617e114610127578063e60c35051461013a578063f545cb661461014d57600080fd5b806354fd4d50146100b257806388e5b2d9146100dd57806391db0b7e1461010057600080fd5b366100ad576040517f1574f9f300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b005b600080fd5b3480156100be57600080fd5b506100c7610199565b6040516100d4919061068f565b60405180910390f35b6100f06100eb36600461072c565b61023c565b60405190151581526020016100d4565b6100f061010e36600461072c565b610341565b34801561011f57600080fd5b5060006100f0565b6100f0610135366004610798565b610432565b6100f0610148366004610798565b610449565b34801561015957600080fd5b506100ab6101683660046107db565b600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016911515919091179055565b60606101c47f000000000000000000000000000000000000000000000000000000000000000061045a565b6101ed7f000000000000000000000000000000000000000000000000000000000000000061045a565b6102167f000000000000000000000000000000000000000000000000000000000000000061045a565b604051602001610228939291906107fd565b604051602081830303815290604052905090565b6000610246610518565b83828114610280576040517f947d5a8400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3460005b828110156103315760008686838181106102a0576102a0610873565b905060200201359050828111156102e3576040517f1101129400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6103148989848181106102f8576102f8610873565b905060200281019061030a91906108a2565b5060005460ff1690565b610325576000945050505050610339565b90910390600101610284565b506001925050505b949350505050565b600061034b610518565b83828114610385576040517f947d5a8400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3460005b828110156103315760008686838181106103a5576103a5610873565b905060200201359050828111156103e8576040517f1101129400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6104158989848181106103fd576103fd610873565b905060200281019061040f91906108a2565b50600190565b610426576000945050505050610339565b90910390600101610389565b600061043c610518565b60005460ff165b92915050565b6000610453610518565b6001610443565b6060600061046783610589565b600101905060008167ffffffffffffffff811115610487576104876108e0565b6040519080825280601f01601f1916602001820160405280156104b1576020820181803683370190505b5090508181016020015b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff017f3031323334353637383961626364656600000000000000000000000000000000600a86061a8153600a85049450846104bb57509392505050565b3373ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001614610587576040517f4ca8886700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b6000807a184f03e93ff9f4daa797ed6e38ed64bf6a1f01000000000000000083106105d2577a184f03e93ff9f4daa797ed6e38ed64bf6a1f010000000000000000830492506040015b6d04ee2d6d415b85acef810000000083106105fe576d04ee2d6d415b85acef8100000000830492506020015b662386f26fc10000831061061c57662386f26fc10000830492506010015b6305f5e1008310610634576305f5e100830492506008015b612710831061064857612710830492506004015b6064831061065a576064830492506002015b600a83106104435760010192915050565b60005b8381101561068657818101518382015260200161066e565b50506000910152565b60208152600082518060208401526106ae81604085016020870161066b565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169190910160400192915050565b60008083601f8401126106f257600080fd5b50813567ffffffffffffffff81111561070a57600080fd5b6020830191508360208260051b850101111561072557600080fd5b9250929050565b6000806000806040858703121561074257600080fd5b843567ffffffffffffffff8082111561075a57600080fd5b610766888389016106e0565b9096509450602087013591508082111561077f57600080fd5b5061078c878288016106e0565b95989497509550505050565b6000602082840312156107aa57600080fd5b813567ffffffffffffffff8111156107c157600080fd5b820161014081850312156107d457600080fd5b9392505050565b6000602082840312156107ed57600080fd5b813580151581146107d457600080fd5b6000845161080f81846020890161066b565b80830190507f2e00000000000000000000000000000000000000000000000000000000000000808252855161084b816001850160208a0161066b565b6001920191820152835161086681600284016020880161066b565b0160020195945050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffec18336030181126108d657600080fd5b9190910192915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fdfea164736f6c6343000813000a";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "contract IEAS";
            readonly name: "eas";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly inputs: readonly [];
        readonly name: "AccessDenied";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InsufficientValue";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidEAS";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidLength";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NotPayable";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "bytes32";
                readonly name: "uid";
                readonly type: "bytes32";
            }, {
                readonly internalType: "bytes32";
                readonly name: "schema";
                readonly type: "bytes32";
            }, {
                readonly internalType: "uint64";
                readonly name: "time";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint64";
                readonly name: "expirationTime";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint64";
                readonly name: "revocationTime";
                readonly type: "uint64";
            }, {
                readonly internalType: "bytes32";
                readonly name: "refUID";
                readonly type: "bytes32";
            }, {
                readonly internalType: "address";
                readonly name: "recipient";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "attester";
                readonly type: "address";
            }, {
                readonly internalType: "bool";
                readonly name: "revocable";
                readonly type: "bool";
            }, {
                readonly internalType: "bytes";
                readonly name: "data";
                readonly type: "bytes";
            }];
            readonly internalType: "struct Attestation";
            readonly name: "attestation";
            readonly type: "tuple";
        }];
        readonly name: "attest";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "isPayable";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "bytes32";
                readonly name: "uid";
                readonly type: "bytes32";
            }, {
                readonly internalType: "bytes32";
                readonly name: "schema";
                readonly type: "bytes32";
            }, {
                readonly internalType: "uint64";
                readonly name: "time";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint64";
                readonly name: "expirationTime";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint64";
                readonly name: "revocationTime";
                readonly type: "uint64";
            }, {
                readonly internalType: "bytes32";
                readonly name: "refUID";
                readonly type: "bytes32";
            }, {
                readonly internalType: "address";
                readonly name: "recipient";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "attester";
                readonly type: "address";
            }, {
                readonly internalType: "bool";
                readonly name: "revocable";
                readonly type: "bool";
            }, {
                readonly internalType: "bytes";
                readonly name: "data";
                readonly type: "bytes";
            }];
            readonly internalType: "struct Attestation[]";
            readonly name: "attestations";
            readonly type: "tuple[]";
        }, {
            readonly internalType: "uint256[]";
            readonly name: "values";
            readonly type: "uint256[]";
        }];
        readonly name: "multiAttest";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "bytes32";
                readonly name: "uid";
                readonly type: "bytes32";
            }, {
                readonly internalType: "bytes32";
                readonly name: "schema";
                readonly type: "bytes32";
            }, {
                readonly internalType: "uint64";
                readonly name: "time";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint64";
                readonly name: "expirationTime";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint64";
                readonly name: "revocationTime";
                readonly type: "uint64";
            }, {
                readonly internalType: "bytes32";
                readonly name: "refUID";
                readonly type: "bytes32";
            }, {
                readonly internalType: "address";
                readonly name: "recipient";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "attester";
                readonly type: "address";
            }, {
                readonly internalType: "bool";
                readonly name: "revocable";
                readonly type: "bool";
            }, {
                readonly internalType: "bytes";
                readonly name: "data";
                readonly type: "bytes";
            }];
            readonly internalType: "struct Attestation[]";
            readonly name: "attestations";
            readonly type: "tuple[]";
        }, {
            readonly internalType: "uint256[]";
            readonly name: "values";
            readonly type: "uint256[]";
        }];
        readonly name: "multiRevoke";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "bytes32";
                readonly name: "uid";
                readonly type: "bytes32";
            }, {
                readonly internalType: "bytes32";
                readonly name: "schema";
                readonly type: "bytes32";
            }, {
                readonly internalType: "uint64";
                readonly name: "time";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint64";
                readonly name: "expirationTime";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint64";
                readonly name: "revocationTime";
                readonly type: "uint64";
            }, {
                readonly internalType: "bytes32";
                readonly name: "refUID";
                readonly type: "bytes32";
            }, {
                readonly internalType: "address";
                readonly name: "recipient";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "attester";
                readonly type: "address";
            }, {
                readonly internalType: "bool";
                readonly name: "revocable";
                readonly type: "bool";
            }, {
                readonly internalType: "bytes";
                readonly name: "data";
                readonly type: "bytes";
            }];
            readonly internalType: "struct Attestation";
            readonly name: "attestation";
            readonly type: "tuple";
        }];
        readonly name: "revoke";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bool";
            readonly name: "status";
            readonly type: "bool";
        }];
        readonly name: "setRevocation";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "version";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly stateMutability: "payable";
        readonly type: "receive";
    }];
    static createInterface(): RevocationResolverInterface;
    static connect(address: string, runner?: ContractRunner | null): RevocationResolver;
}
export {};
//# sourceMappingURL=RevocationResolver__factory.d.ts.map