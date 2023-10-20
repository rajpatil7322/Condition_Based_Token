import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, EventFragment, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedLogDescription, TypedListener, TypedContractMethod } from "../common";
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
export type AttestationRequestStruct = {
    schema: BytesLike;
    data: AttestationRequestDataStruct;
};
export type AttestationRequestStructOutput = [
    schema: string,
    data: AttestationRequestDataStructOutput
] & {
    schema: string;
    data: AttestationRequestDataStructOutput;
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
export type DelegatedAttestationRequestStruct = {
    schema: BytesLike;
    data: AttestationRequestDataStruct;
    signature: SignatureStruct;
    attester: AddressLike;
    deadline: BigNumberish;
};
export type DelegatedAttestationRequestStructOutput = [
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
export type AttestationStruct = {
    uid: BytesLike;
    schema: BytesLike;
    time: BigNumberish;
    expirationTime: BigNumberish;
    revocationTime: BigNumberish;
    refUID: BytesLike;
    recipient: AddressLike;
    attester: AddressLike;
    revocable: boolean;
    data: BytesLike;
};
export type AttestationStructOutput = [
    uid: string,
    schema: string,
    time: bigint,
    expirationTime: bigint,
    revocationTime: bigint,
    refUID: string,
    recipient: string,
    attester: string,
    revocable: boolean,
    data: string
] & {
    uid: string;
    schema: string;
    time: bigint;
    expirationTime: bigint;
    revocationTime: bigint;
    refUID: string;
    recipient: string;
    attester: string;
    revocable: boolean;
    data: string;
};
export type MultiAttestationRequestStruct = {
    schema: BytesLike;
    data: AttestationRequestDataStruct[];
};
export type MultiAttestationRequestStructOutput = [
    schema: string,
    data: AttestationRequestDataStructOutput[]
] & {
    schema: string;
    data: AttestationRequestDataStructOutput[];
};
export type MultiDelegatedAttestationRequestStruct = {
    schema: BytesLike;
    data: AttestationRequestDataStruct[];
    signatures: SignatureStruct[];
    attester: AddressLike;
    deadline: BigNumberish;
};
export type MultiDelegatedAttestationRequestStructOutput = [
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
export type MultiRevocationRequestStruct = {
    schema: BytesLike;
    data: RevocationRequestDataStruct[];
};
export type MultiRevocationRequestStructOutput = [
    schema: string,
    data: RevocationRequestDataStructOutput[]
] & {
    schema: string;
    data: RevocationRequestDataStructOutput[];
};
export type MultiDelegatedRevocationRequestStruct = {
    schema: BytesLike;
    data: RevocationRequestDataStruct[];
    signatures: SignatureStruct[];
    revoker: AddressLike;
    deadline: BigNumberish;
};
export type MultiDelegatedRevocationRequestStructOutput = [
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
export type RevocationRequestStruct = {
    schema: BytesLike;
    data: RevocationRequestDataStruct;
};
export type RevocationRequestStructOutput = [
    schema: string,
    data: RevocationRequestDataStructOutput
] & {
    schema: string;
    data: RevocationRequestDataStructOutput;
};
export type DelegatedRevocationRequestStruct = {
    schema: BytesLike;
    data: RevocationRequestDataStruct;
    signature: SignatureStruct;
    revoker: AddressLike;
    deadline: BigNumberish;
};
export type DelegatedRevocationRequestStructOutput = [
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
export interface IEASInterface extends Interface {
    getFunction(nameOrSignature: "attest" | "attestByDelegation" | "getAttestation" | "getRevokeOffchain" | "getSchemaRegistry" | "getTimestamp" | "isAttestationValid" | "multiAttest" | "multiAttestByDelegation" | "multiRevoke" | "multiRevokeByDelegation" | "multiRevokeOffchain" | "multiTimestamp" | "revoke" | "revokeByDelegation" | "revokeOffchain" | "timestamp"): FunctionFragment;
    getEvent(nameOrSignatureOrTopic: "Attested" | "Revoked" | "RevokedOffchain" | "Timestamped"): EventFragment;
    encodeFunctionData(functionFragment: "attest", values: [AttestationRequestStruct]): string;
    encodeFunctionData(functionFragment: "attestByDelegation", values: [DelegatedAttestationRequestStruct]): string;
    encodeFunctionData(functionFragment: "getAttestation", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "getRevokeOffchain", values: [AddressLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "getSchemaRegistry", values?: undefined): string;
    encodeFunctionData(functionFragment: "getTimestamp", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "isAttestationValid", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "multiAttest", values: [MultiAttestationRequestStruct[]]): string;
    encodeFunctionData(functionFragment: "multiAttestByDelegation", values: [MultiDelegatedAttestationRequestStruct[]]): string;
    encodeFunctionData(functionFragment: "multiRevoke", values: [MultiRevocationRequestStruct[]]): string;
    encodeFunctionData(functionFragment: "multiRevokeByDelegation", values: [MultiDelegatedRevocationRequestStruct[]]): string;
    encodeFunctionData(functionFragment: "multiRevokeOffchain", values: [BytesLike[]]): string;
    encodeFunctionData(functionFragment: "multiTimestamp", values: [BytesLike[]]): string;
    encodeFunctionData(functionFragment: "revoke", values: [RevocationRequestStruct]): string;
    encodeFunctionData(functionFragment: "revokeByDelegation", values: [DelegatedRevocationRequestStruct]): string;
    encodeFunctionData(functionFragment: "revokeOffchain", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "timestamp", values: [BytesLike]): string;
    decodeFunctionResult(functionFragment: "attest", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "attestByDelegation", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAttestation", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRevokeOffchain", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getSchemaRegistry", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTimestamp", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isAttestationValid", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "multiAttest", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "multiAttestByDelegation", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "multiRevoke", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "multiRevokeByDelegation", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "multiRevokeOffchain", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "multiTimestamp", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "revoke", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "revokeByDelegation", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "revokeOffchain", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "timestamp", data: BytesLike): Result;
}
export declare namespace AttestedEvent {
    type InputTuple = [
        recipient: AddressLike,
        attester: AddressLike,
        uid: BytesLike,
        schemaUID: BytesLike
    ];
    type OutputTuple = [
        recipient: string,
        attester: string,
        uid: string,
        schemaUID: string
    ];
    interface OutputObject {
        recipient: string;
        attester: string;
        uid: string;
        schemaUID: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace RevokedEvent {
    type InputTuple = [
        recipient: AddressLike,
        attester: AddressLike,
        uid: BytesLike,
        schemaUID: BytesLike
    ];
    type OutputTuple = [
        recipient: string,
        attester: string,
        uid: string,
        schemaUID: string
    ];
    interface OutputObject {
        recipient: string;
        attester: string;
        uid: string;
        schemaUID: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace RevokedOffchainEvent {
    type InputTuple = [
        revoker: AddressLike,
        data: BytesLike,
        timestamp: BigNumberish
    ];
    type OutputTuple = [revoker: string, data: string, timestamp: bigint];
    interface OutputObject {
        revoker: string;
        data: string;
        timestamp: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace TimestampedEvent {
    type InputTuple = [data: BytesLike, timestamp: BigNumberish];
    type OutputTuple = [data: string, timestamp: bigint];
    interface OutputObject {
        data: string;
        timestamp: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export interface IEAS extends BaseContract {
    connect(runner?: ContractRunner | null): IEAS;
    waitForDeployment(): Promise<this>;
    interface: IEASInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    attest: TypedContractMethod<[
        request: AttestationRequestStruct
    ], [
        string
    ], "payable">;
    attestByDelegation: TypedContractMethod<[
        delegatedRequest: DelegatedAttestationRequestStruct
    ], [
        string
    ], "payable">;
    getAttestation: TypedContractMethod<[
        uid: BytesLike
    ], [
        AttestationStructOutput
    ], "view">;
    getRevokeOffchain: TypedContractMethod<[
        revoker: AddressLike,
        data: BytesLike
    ], [
        bigint
    ], "view">;
    getSchemaRegistry: TypedContractMethod<[], [string], "view">;
    getTimestamp: TypedContractMethod<[data: BytesLike], [bigint], "view">;
    isAttestationValid: TypedContractMethod<[uid: BytesLike], [boolean], "view">;
    multiAttest: TypedContractMethod<[
        multiRequests: MultiAttestationRequestStruct[]
    ], [
        string[]
    ], "payable">;
    multiAttestByDelegation: TypedContractMethod<[
        multiDelegatedRequests: MultiDelegatedAttestationRequestStruct[]
    ], [
        string[]
    ], "payable">;
    multiRevoke: TypedContractMethod<[
        multiRequests: MultiRevocationRequestStruct[]
    ], [
        void
    ], "payable">;
    multiRevokeByDelegation: TypedContractMethod<[
        multiDelegatedRequests: MultiDelegatedRevocationRequestStruct[]
    ], [
        void
    ], "payable">;
    multiRevokeOffchain: TypedContractMethod<[
        data: BytesLike[]
    ], [
        bigint
    ], "nonpayable">;
    multiTimestamp: TypedContractMethod<[
        data: BytesLike[]
    ], [
        bigint
    ], "nonpayable">;
    revoke: TypedContractMethod<[
        request: RevocationRequestStruct
    ], [
        void
    ], "payable">;
    revokeByDelegation: TypedContractMethod<[
        delegatedRequest: DelegatedRevocationRequestStruct
    ], [
        void
    ], "payable">;
    revokeOffchain: TypedContractMethod<[
        data: BytesLike
    ], [
        bigint
    ], "nonpayable">;
    timestamp: TypedContractMethod<[data: BytesLike], [bigint], "nonpayable">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "attest"): TypedContractMethod<[
        request: AttestationRequestStruct
    ], [
        string
    ], "payable">;
    getFunction(nameOrSignature: "attestByDelegation"): TypedContractMethod<[
        delegatedRequest: DelegatedAttestationRequestStruct
    ], [
        string
    ], "payable">;
    getFunction(nameOrSignature: "getAttestation"): TypedContractMethod<[uid: BytesLike], [AttestationStructOutput], "view">;
    getFunction(nameOrSignature: "getRevokeOffchain"): TypedContractMethod<[
        revoker: AddressLike,
        data: BytesLike
    ], [
        bigint
    ], "view">;
    getFunction(nameOrSignature: "getSchemaRegistry"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "getTimestamp"): TypedContractMethod<[data: BytesLike], [bigint], "view">;
    getFunction(nameOrSignature: "isAttestationValid"): TypedContractMethod<[uid: BytesLike], [boolean], "view">;
    getFunction(nameOrSignature: "multiAttest"): TypedContractMethod<[
        multiRequests: MultiAttestationRequestStruct[]
    ], [
        string[]
    ], "payable">;
    getFunction(nameOrSignature: "multiAttestByDelegation"): TypedContractMethod<[
        multiDelegatedRequests: MultiDelegatedAttestationRequestStruct[]
    ], [
        string[]
    ], "payable">;
    getFunction(nameOrSignature: "multiRevoke"): TypedContractMethod<[
        multiRequests: MultiRevocationRequestStruct[]
    ], [
        void
    ], "payable">;
    getFunction(nameOrSignature: "multiRevokeByDelegation"): TypedContractMethod<[
        multiDelegatedRequests: MultiDelegatedRevocationRequestStruct[]
    ], [
        void
    ], "payable">;
    getFunction(nameOrSignature: "multiRevokeOffchain"): TypedContractMethod<[data: BytesLike[]], [bigint], "nonpayable">;
    getFunction(nameOrSignature: "multiTimestamp"): TypedContractMethod<[data: BytesLike[]], [bigint], "nonpayable">;
    getFunction(nameOrSignature: "revoke"): TypedContractMethod<[request: RevocationRequestStruct], [void], "payable">;
    getFunction(nameOrSignature: "revokeByDelegation"): TypedContractMethod<[
        delegatedRequest: DelegatedRevocationRequestStruct
    ], [
        void
    ], "payable">;
    getFunction(nameOrSignature: "revokeOffchain"): TypedContractMethod<[data: BytesLike], [bigint], "nonpayable">;
    getFunction(nameOrSignature: "timestamp"): TypedContractMethod<[data: BytesLike], [bigint], "nonpayable">;
    getEvent(key: "Attested"): TypedContractEvent<AttestedEvent.InputTuple, AttestedEvent.OutputTuple, AttestedEvent.OutputObject>;
    getEvent(key: "Revoked"): TypedContractEvent<RevokedEvent.InputTuple, RevokedEvent.OutputTuple, RevokedEvent.OutputObject>;
    getEvent(key: "RevokedOffchain"): TypedContractEvent<RevokedOffchainEvent.InputTuple, RevokedOffchainEvent.OutputTuple, RevokedOffchainEvent.OutputObject>;
    getEvent(key: "Timestamped"): TypedContractEvent<TimestampedEvent.InputTuple, TimestampedEvent.OutputTuple, TimestampedEvent.OutputObject>;
    filters: {
        "Attested(address,address,bytes32,bytes32)": TypedContractEvent<AttestedEvent.InputTuple, AttestedEvent.OutputTuple, AttestedEvent.OutputObject>;
        Attested: TypedContractEvent<AttestedEvent.InputTuple, AttestedEvent.OutputTuple, AttestedEvent.OutputObject>;
        "Revoked(address,address,bytes32,bytes32)": TypedContractEvent<RevokedEvent.InputTuple, RevokedEvent.OutputTuple, RevokedEvent.OutputObject>;
        Revoked: TypedContractEvent<RevokedEvent.InputTuple, RevokedEvent.OutputTuple, RevokedEvent.OutputObject>;
        "RevokedOffchain(address,bytes32,uint64)": TypedContractEvent<RevokedOffchainEvent.InputTuple, RevokedOffchainEvent.OutputTuple, RevokedOffchainEvent.OutputObject>;
        RevokedOffchain: TypedContractEvent<RevokedOffchainEvent.InputTuple, RevokedOffchainEvent.OutputTuple, RevokedOffchainEvent.OutputObject>;
        "Timestamped(bytes32,uint64)": TypedContractEvent<TimestampedEvent.InputTuple, TimestampedEvent.OutputTuple, TimestampedEvent.OutputObject>;
        Timestamped: TypedContractEvent<TimestampedEvent.InputTuple, TimestampedEvent.OutputTuple, TimestampedEvent.OutputObject>;
    };
}
//# sourceMappingURL=IEAS.d.ts.map