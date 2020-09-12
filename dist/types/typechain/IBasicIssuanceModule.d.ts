import { Contract, ContractTransaction, EventFilter, Signer } from "ethers";
import { Listener, Provider } from "ethers/providers";
import { BigNumber, BigNumberish, Interface } from "ethers/utils";
import { TransactionOverrides, TypedFunctionDescription } from ".";
interface IBasicIssuanceModuleInterface extends Interface {
    functions: {
        getRequiredComponentUnitsForIssue: TypedFunctionDescription<{
            encode([_setToken, _quantity]: [string, BigNumberish]): string;
        }>;
    };
    events: {};
}
export declare class IBasicIssuanceModule extends Contract {
    connect(signerOrProvider: Signer | Provider | string): IBasicIssuanceModule;
    attach(addressOrName: string): IBasicIssuanceModule;
    deployed(): Promise<IBasicIssuanceModule>;
    on(event: EventFilter | string, listener: Listener): IBasicIssuanceModule;
    once(event: EventFilter | string, listener: Listener): IBasicIssuanceModule;
    addListener(eventName: EventFilter | string, listener: Listener): IBasicIssuanceModule;
    removeAllListeners(eventName: EventFilter | string): IBasicIssuanceModule;
    removeListener(eventName: any, listener: Listener): IBasicIssuanceModule;
    interface: IBasicIssuanceModuleInterface;
    functions: {
        getRequiredComponentUnitsForIssue(_setToken: string, _quantity: BigNumberish, overrides?: TransactionOverrides): Promise<ContractTransaction>;
    };
    getRequiredComponentUnitsForIssue(_setToken: string, _quantity: BigNumberish, overrides?: TransactionOverrides): Promise<ContractTransaction>;
    filters: {};
    estimate: {
        getRequiredComponentUnitsForIssue(_setToken: string, _quantity: BigNumberish): Promise<BigNumber>;
    };
}
export {};
