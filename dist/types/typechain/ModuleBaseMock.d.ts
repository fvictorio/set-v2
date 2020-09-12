import { Contract, ContractTransaction, EventFilter, Signer } from "ethers";
import { Listener, Provider } from "ethers/providers";
import { Arrayish, BigNumber, BigNumberish, Interface } from "ethers/utils";
import { TransactionOverrides, TypedFunctionDescription } from ".";
interface ModuleBaseMockInterface extends Interface {
    functions: {
        controller: TypedFunctionDescription<{
            encode([]: []): string;
        }>;
        initializeModuleOnSet: TypedFunctionDescription<{
            encode([_setToken]: [string]): string;
        }>;
        removeModule: TypedFunctionDescription<{
            encode([]: []): string;
        }>;
        removed: TypedFunctionDescription<{
            encode([]: []): string;
        }>;
        testGetAndValidateAdapter: TypedFunctionDescription<{
            encode([_integrationName]: [string]): string;
        }>;
        testGetAndValidateAdapterWithHash: TypedFunctionDescription<{
            encode([_integrationHash]: [Arrayish]): string;
        }>;
        testGetModuleFee: TypedFunctionDescription<{
            encode([_feeIndex, _quantity]: [BigNumberish, BigNumberish]): string;
        }>;
        testIsSetManager: TypedFunctionDescription<{
            encode([_setToken, _toCheck]: [string, string]): string;
        }>;
        testIsSetPendingInitialization: TypedFunctionDescription<{
            encode([_setToken]: [string]): string;
        }>;
        testIsSetValidAndInitialized: TypedFunctionDescription<{
            encode([_setToken]: [string]): string;
        }>;
        testOnlyManagerAndValidSet: TypedFunctionDescription<{
            encode([_setToken]: [string]): string;
        }>;
        testOnlyModule: TypedFunctionDescription<{
            encode([_setToken]: [string]): string;
        }>;
        testOnlySetManager: TypedFunctionDescription<{
            encode([_setToken]: [string]): string;
        }>;
        testOnlyValidAndInitializedSet: TypedFunctionDescription<{
            encode([_setToken]: [string]): string;
        }>;
        testOnlyValidInitialization: TypedFunctionDescription<{
            encode([_setToken]: [string]): string;
        }>;
        testPayProtocolFeeFromSetToken: TypedFunctionDescription<{
            encode([_setToken, _component, _feeQuantity]: [string, string, BigNumberish]): string;
        }>;
        testTransferFrom: TypedFunctionDescription<{
            encode([_token, _from, _to, _quantity]: [string, string, string, BigNumberish]): string;
        }>;
    };
    events: {};
}
export declare class ModuleBaseMock extends Contract {
    connect(signerOrProvider: Signer | Provider | string): ModuleBaseMock;
    attach(addressOrName: string): ModuleBaseMock;
    deployed(): Promise<ModuleBaseMock>;
    on(event: EventFilter | string, listener: Listener): ModuleBaseMock;
    once(event: EventFilter | string, listener: Listener): ModuleBaseMock;
    addListener(eventName: EventFilter | string, listener: Listener): ModuleBaseMock;
    removeAllListeners(eventName: EventFilter | string): ModuleBaseMock;
    removeListener(eventName: any, listener: Listener): ModuleBaseMock;
    interface: ModuleBaseMockInterface;
    functions: {
        controller(): Promise<string>;
        initializeModuleOnSet(_setToken: string, overrides?: TransactionOverrides): Promise<ContractTransaction>;
        removeModule(overrides?: TransactionOverrides): Promise<ContractTransaction>;
        removed(): Promise<boolean>;
        testGetAndValidateAdapter(_integrationName: string): Promise<string>;
        testGetAndValidateAdapterWithHash(_integrationHash: Arrayish): Promise<string>;
        testGetModuleFee(_feeIndex: BigNumberish, _quantity: BigNumberish): Promise<BigNumber>;
        testIsSetManager(_setToken: string, _toCheck: string): Promise<boolean>;
        testIsSetPendingInitialization(_setToken: string): Promise<boolean>;
        testIsSetValidAndInitialized(_setToken: string): Promise<boolean>;
        testOnlyManagerAndValidSet(_setToken: string): Promise<void>;
        testOnlyModule(_setToken: string): Promise<void>;
        testOnlySetManager(_setToken: string): Promise<void>;
        testOnlyValidAndInitializedSet(_setToken: string): Promise<void>;
        testOnlyValidInitialization(_setToken: string): Promise<void>;
        testPayProtocolFeeFromSetToken(_setToken: string, _component: string, _feeQuantity: BigNumberish, overrides?: TransactionOverrides): Promise<ContractTransaction>;
        testTransferFrom(_token: string, _from: string, _to: string, _quantity: BigNumberish, overrides?: TransactionOverrides): Promise<ContractTransaction>;
    };
    controller(): Promise<string>;
    initializeModuleOnSet(_setToken: string, overrides?: TransactionOverrides): Promise<ContractTransaction>;
    removeModule(overrides?: TransactionOverrides): Promise<ContractTransaction>;
    removed(): Promise<boolean>;
    testGetAndValidateAdapter(_integrationName: string): Promise<string>;
    testGetAndValidateAdapterWithHash(_integrationHash: Arrayish): Promise<string>;
    testGetModuleFee(_feeIndex: BigNumberish, _quantity: BigNumberish): Promise<BigNumber>;
    testIsSetManager(_setToken: string, _toCheck: string): Promise<boolean>;
    testIsSetPendingInitialization(_setToken: string): Promise<boolean>;
    testIsSetValidAndInitialized(_setToken: string): Promise<boolean>;
    testOnlyManagerAndValidSet(_setToken: string): Promise<void>;
    testOnlyModule(_setToken: string): Promise<void>;
    testOnlySetManager(_setToken: string): Promise<void>;
    testOnlyValidAndInitializedSet(_setToken: string): Promise<void>;
    testOnlyValidInitialization(_setToken: string): Promise<void>;
    testPayProtocolFeeFromSetToken(_setToken: string, _component: string, _feeQuantity: BigNumberish, overrides?: TransactionOverrides): Promise<ContractTransaction>;
    testTransferFrom(_token: string, _from: string, _to: string, _quantity: BigNumberish, overrides?: TransactionOverrides): Promise<ContractTransaction>;
    filters: {};
    estimate: {
        controller(): Promise<BigNumber>;
        initializeModuleOnSet(_setToken: string): Promise<BigNumber>;
        removeModule(): Promise<BigNumber>;
        removed(): Promise<BigNumber>;
        testGetAndValidateAdapter(_integrationName: string): Promise<BigNumber>;
        testGetAndValidateAdapterWithHash(_integrationHash: Arrayish): Promise<BigNumber>;
        testGetModuleFee(_feeIndex: BigNumberish, _quantity: BigNumberish): Promise<BigNumber>;
        testIsSetManager(_setToken: string, _toCheck: string): Promise<BigNumber>;
        testIsSetPendingInitialization(_setToken: string): Promise<BigNumber>;
        testIsSetValidAndInitialized(_setToken: string): Promise<BigNumber>;
        testOnlyManagerAndValidSet(_setToken: string): Promise<BigNumber>;
        testOnlyModule(_setToken: string): Promise<BigNumber>;
        testOnlySetManager(_setToken: string): Promise<BigNumber>;
        testOnlyValidAndInitializedSet(_setToken: string): Promise<BigNumber>;
        testOnlyValidInitialization(_setToken: string): Promise<BigNumber>;
        testPayProtocolFeeFromSetToken(_setToken: string, _component: string, _feeQuantity: BigNumberish): Promise<BigNumber>;
        testTransferFrom(_token: string, _from: string, _to: string, _quantity: BigNumberish): Promise<BigNumber>;
    };
}
export {};
