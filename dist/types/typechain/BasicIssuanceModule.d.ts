import { Contract, ContractTransaction, EventFilter, Signer } from "ethers";
import { Listener, Provider } from "ethers/providers";
import { BigNumber, BigNumberish, Interface } from "ethers/utils";
import { TransactionOverrides, TypedEventDescription, TypedFunctionDescription } from ".";
interface BasicIssuanceModuleInterface extends Interface {
    functions: {
        controller: TypedFunctionDescription<{
            encode([]: []): string;
        }>;
        getRequiredComponentUnitsForIssue: TypedFunctionDescription<{
            encode([_setToken, _quantity]: [string, BigNumberish]): string;
        }>;
        initialize: TypedFunctionDescription<{
            encode([_setToken, _preIssueHook]: [string, string]): string;
        }>;
        issue: TypedFunctionDescription<{
            encode([_setToken, _quantity, _to]: [string, BigNumberish, string]): string;
        }>;
        managerIssuanceHook: TypedFunctionDescription<{
            encode([]: [string]): string;
        }>;
        redeem: TypedFunctionDescription<{
            encode([_setToken, _quantity, _to]: [string, BigNumberish, string]): string;
        }>;
        removeModule: TypedFunctionDescription<{
            encode([]: []): string;
        }>;
    };
    events: {
        SetTokenIssued: TypedEventDescription<{
            encodeTopics([_setToken, _issuer, _to, _hookContract, _quantity]: [string | null, string | null, string | null, null, null]): string[];
        }>;
        SetTokenRedeemed: TypedEventDescription<{
            encodeTopics([_setToken, _redeemer, _to, _quantity]: [string | null, string | null, string | null, null]): string[];
        }>;
    };
}
export declare class BasicIssuanceModule extends Contract {
    connect(signerOrProvider: Signer | Provider | string): BasicIssuanceModule;
    attach(addressOrName: string): BasicIssuanceModule;
    deployed(): Promise<BasicIssuanceModule>;
    on(event: EventFilter | string, listener: Listener): BasicIssuanceModule;
    once(event: EventFilter | string, listener: Listener): BasicIssuanceModule;
    addListener(eventName: EventFilter | string, listener: Listener): BasicIssuanceModule;
    removeAllListeners(eventName: EventFilter | string): BasicIssuanceModule;
    removeListener(eventName: any, listener: Listener): BasicIssuanceModule;
    interface: BasicIssuanceModuleInterface;
    functions: {
        controller(): Promise<string>;
        getRequiredComponentUnitsForIssue(_setToken: string, _quantity: BigNumberish): Promise<{
            0: string[];
            1: BigNumber[];
        }>;
        initialize(_setToken: string, _preIssueHook: string, overrides?: TransactionOverrides): Promise<ContractTransaction>;
        issue(_setToken: string, _quantity: BigNumberish, _to: string, overrides?: TransactionOverrides): Promise<ContractTransaction>;
        managerIssuanceHook(arg0: string): Promise<string>;
        redeem(_setToken: string, _quantity: BigNumberish, _to: string, overrides?: TransactionOverrides): Promise<ContractTransaction>;
        removeModule(overrides?: TransactionOverrides): Promise<ContractTransaction>;
    };
    controller(): Promise<string>;
    getRequiredComponentUnitsForIssue(_setToken: string, _quantity: BigNumberish): Promise<{
        0: string[];
        1: BigNumber[];
    }>;
    initialize(_setToken: string, _preIssueHook: string, overrides?: TransactionOverrides): Promise<ContractTransaction>;
    issue(_setToken: string, _quantity: BigNumberish, _to: string, overrides?: TransactionOverrides): Promise<ContractTransaction>;
    managerIssuanceHook(arg0: string): Promise<string>;
    redeem(_setToken: string, _quantity: BigNumberish, _to: string, overrides?: TransactionOverrides): Promise<ContractTransaction>;
    removeModule(overrides?: TransactionOverrides): Promise<ContractTransaction>;
    filters: {
        SetTokenIssued(_setToken: string | null, _issuer: string | null, _to: string | null, _hookContract: null, _quantity: null): EventFilter;
        SetTokenRedeemed(_setToken: string | null, _redeemer: string | null, _to: string | null, _quantity: null): EventFilter;
    };
    estimate: {
        controller(): Promise<BigNumber>;
        getRequiredComponentUnitsForIssue(_setToken: string, _quantity: BigNumberish): Promise<BigNumber>;
        initialize(_setToken: string, _preIssueHook: string): Promise<BigNumber>;
        issue(_setToken: string, _quantity: BigNumberish, _to: string): Promise<BigNumber>;
        managerIssuanceHook(arg0: string): Promise<BigNumber>;
        redeem(_setToken: string, _quantity: BigNumberish, _to: string): Promise<BigNumber>;
        removeModule(): Promise<BigNumber>;
    };
}
export {};
