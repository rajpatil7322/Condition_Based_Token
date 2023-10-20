import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, EventFragment, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedLogDescription, TypedListener, TypedContractMethod } from "../../../common";
export type AttestationRequestDataStruct = {
    recipient: AddressLike;
    expirationTime: BigNumberish;
    revocable: boolean;
    refUID: BytesLike;
    data: BytesLike;
    value: BigNumberish;
};
export type AttestationRequestDataStructOutput = [
    recipient: string,
    expirationTime: bigint,
    revocable: boolean,
    refUID: string,
    data: string,
    value: bigint
] & {
    recipient: string;
    expirationTime: bigint;
    revocable: boolean;
    refUID: string;
    data: string;
    value: bigint;
};
export type SignatureStruct = {
    v: BigNumberish;
    r: BytesLike;
    s: BytesLike;
};
export type SignatureStructOutput = [v: bigint, r: string, s: string] & {
    v: bigint;
    r: string;
    s: string;
};
export type DelegatedProxyAttestationRequestStruct = {
    schema: BytesLike;
    data: AttestationRequestDataStruct;
    signature: SignatureStruct;
    attester: AddressLike;
    deadline: BigNumberish;
};
export type DelegatedProxyAttestationRequestStructOutput = [
    schema: string,
    data: AttestationRequestDataStructOutput,
    signature: SignatureStructOutput,
    attester: string,
    deadline: bigint
] & {
    schema: string;
    data: AttestationRequestDataStructOutput;
    signature: SignatureStructOutput;
    attester: string;
    deadline: bigint;
};
export type MultiDelegatedProxyAttestationRequestStruct = {
    schema: BytesLike;
    data: AttestationRequestDataStruct[];
    signatures: SignatureStruct[];
    attester: AddressLike;
    deadline: BigNumberish;
};
export type MultiDelegatedProxyAttestationRequestStructOutput = [
    schema: string,
    data: AttestationRequestDataStructOutput[],
    signatures: SignatureStructOutput[],
    attester: string,
    deadline: bigint
] & {
    schema: string;
    data: AttestationRequestDataStructOutput[];
    signatures: SignatureStructOutput[];
    attester: string;
    deadline: bigint;
};
export type RevocationRequestDataStruct = {
    uid: BytesLike;
    value: BigNumberish;
};
export type RevocationRequestDataStructOutput = [uid: string, value: bigint] & {
    uid: string;
    value: bigint;
};
export type MultiDelegatedProxyRevocationRequestStruct = {
    schema: BytesLike;
    data: RevocationRequestDataStruct[];
    signatures: SignatureStruct[];
    revoker: AddressLike;
    deadline: BigNumberish;
};
export type MultiDelegatedProxyRevocationRequestStructOutput = [
    schema: string,
    data: RevocationRequestDataStructOutput[],
    signatures: SignatureStructOutput[],
    revoker: string,
    deadline: bigint
] & {
    schema: string;
    data: RevocationRequestDataStructOutput[];
    signatures: SignatureStructOutput[];
    revoker: string;
    deadline: bigint;
};
export type DelegatedProxyRevocationRequestStruct = {
    schema: BytesLike;
    data: RevocationRequestDataStruct;
    signature: SignatureStruct;
    revoker: AddressLike;
    deadline: BigNumberish;
};
export type DelegatedProxyRevocationRequestStructOutput = [
    schema: string,
    data: RevocationRequestDataStructOutput,
    signature: SignatureStructOutput,
    revoker: string,
    deadline: bigint
] & {
    schema: string;
    data: RevocationRequestDataStructOutput;
    signature: SignatureStructOutput;
    revoker: string;
    deadline: bigint;
};
export interface EIP712ProxyInterface extends Interface {
    getFunction(nameOrSignature: "attestByDelegation" | "eip712Domain" | "getAttestTypeHash" | "getAttester" | "getDomainSeparator" | "getEAS" | "getName" | "getRevokeTypeHash" | "multiAttestByDelegation" | "multiRevokeByDelegation" | "revokeByDelegation" | "version"): FunctionFragment;
    getEvent(nameOrSignatureOrTopic: "EIP712DomainChanged"): EventFragment;
    encodeFunctionData(functionFragment: "attestByDelegation", values: [DelegatedProxyAttestationRequestStruct]): string;
    encodeFunctionData(functionFragment: "eip712Domain", values?: undefined): string;
    encodeFunctionData(functionFragment: "getAttestTypeHash", values?: undefined): string;
    encodeFunctionData(functionFragment: "getAttester", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "getDomainSeparator", values?: undefined): string;
    encodeFunctionData(functionFragment: "getEAS", values?: undefined): string;
    encodeFunctionData(functionFragment: "getName", values?: undefined): string;
    encodeFunctionData(functionFragment: "getRevokeTypeHash", values?: undefined): string;
    encodeFunctionData(functionFragment: "multiAttestByDelegation", values: [MultiDelegatedProxyAttestationRequestStruct[]]): string;
    encodeFunctionData(functionFragment: "multiRevokeByDelegation", values: [MultiDelegatedProxyRevocationRequestStruct[]]): string;
    encodeFunctionData(functionFragment: "revokeByDelegation", values: [DelegatedProxyRevocationRequestStruct]): string;
    encodeFunctionData(functionFragment: "version", values?: undefined): string;
    decodeFunctionResult(functionFragment: "attestByDelegation", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "eip712Domain", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAttestTypeHash", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAttester", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getDomainSeparator", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getEAS", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getName", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRevokeTypeHash", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "multiAttestByDelegation", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "multiRevokeByDelegation", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "revokeByDelegation", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "version", data: BytesLike): Result;
}
export declare namespace EIP712DomainChangedEvent {
    type InputTuple = [];
    type OutputTuple = [];
    interface OutputObject {
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export interface EIP712Proxy extends BaseContract {
    connect(runner?: ContractRunner | null): EIP712Proxy;
    waitForDeployment(): Promise<this>;
    interface: EIP712ProxyInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    attestByDelegation: TypedContractMethod<[
        delegatedRequest: DelegatedProxyAttestationRequestStruct
    ], [
        string
    ], "payable">;
    eip712Domain: TypedContractMethod<[
    ], [
        [
            string,
            string,
            string,
            bigint,
            string,
            string,
            bigint[]
        ] & {
            fields: string;
            name: string;
            version: string;
            chainId: bigint;
            verifyingContract: string;
            salt: string;
            extensions: bigint[];
        }
    ], "view">;
    getAttestTypeHash: TypedContractMethod<[], [string], "view">;
    getAttester: TypedContractMethod<[uid: BytesLike], [string], "view">;
    getDomainSeparator: TypedContractMethod<[], [string], "view">;
    getEAS: TypedContractMethod<[], [string], "view">;
    getName: TypedContractMethod<[], [string], "view">;
    getRevokeTypeHash: TypedContractMethod<[], [string], "view">;
    multiAttestByDelegation: TypedContractMethod<[
        multiDelegatedRequests: MultiDelegatedProxyAttestationRequestStruct[]
    ], [
        string[]
    ], "payable">;
    multiRevokeByDelegation: TypedContractMethod<[
        multiDelegatedRequests: MultiDelegatedProxyRevocationRequestStruct[]
    ], [
        void
    ], "payable">;
    revokeByDelegation: TypedContractMethod<[
        delegatedRequest: DelegatedProxyRevocationRequestStruct
    ], [
        void
    ], "payable">;
    version: TypedContractMethod<[], [string], "view">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "attestByDelegation"): TypedContractMethod<[
        delegatedRequest: DelegatedProxyAttestationRequestStruct
    ], [
        string
    ], "payable">;
    getFunction(nameOrSignature: "eip712Domain"): TypedContractMethod<[
    ], [
        [
            string,
            string,
            string,
            bigint,
            string,
            string,
            bigint[]
        ] & {
            fields: string;
            name: string;
            version: string;
            chainId: bigint;
            verifyingContract: string;
            salt: string;
            extensions: bigint[];
        }
    ], "view">;
    getFunction(nameOrSignature: "getAttestTypeHash"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "getAttester"): TypedContractMethod<[uid: BytesLike], [string], "view">;
    getFunction(nameOrSignature: "getDomainSeparator"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "getEAS"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "getName"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "getRevokeTypeHash"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "multiAttestByDelegation"): TypedContractMethod<[
        multiDelegatedRequests: MultiDelegatedProxyAttestationRequestStruct[]
    ], [
        string[]
    ], "payable">;
    getFunction(nameOrSignature: "multiRevokeByDelegation"): TypedContractMethod<[
        multiDelegatedRequests: MultiDelegatedProxyRevocationRequestStruct[]
    ], [
        void
    ], "payable">;
    getFunction(nameOrSignature: "revokeByDelegation"): TypedContractMethod<[
        delegatedRequest: DelegatedProxyRevocationRequestStruct
    ], [
        void
    ], "payable">;
    getFunction(nameOrSignature: "version"): TypedContractMethod<[], [string], "view">;
    getEvent(key: "EIP712DomainChanged"): TypedContractEvent<EIP712DomainChangedEvent.InputTuple, EIP712DomainChangedEvent.OutputTuple, EIP712DomainChangedEvent.OutputObject>;
    filters: {
        "EIP712DomainChanged()": TypedContractEvent<EIP712DomainChangedEvent.InputTuple, EIP712DomainChangedEvent.OutputTuple, EIP712DomainChangedEvent.OutputObject>;
        EIP712DomainChanged: TypedContractEvent<EIP712DomainChangedEvent.InputTuple, EIP712DomainChangedEvent.OutputTuple, EIP712DomainChangedEvent.OutputObject>;
    };
}
//# sourceMappingURL=EIP712Proxy.d.ts.map