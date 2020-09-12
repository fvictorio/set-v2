import { Contract, ContractTransaction, EventFilter, Signer } from "ethers";
import { Listener, Provider } from "ethers/providers";
import { BigNumber, BigNumberish, Interface } from "ethers/utils";
import { TransactionOverrides, TypedEventDescription, TypedFunctionDescription } from ".";
interface SetTokenCreatorInterface extends Interface {
    functions: {
        controller: TypedFunctionDescription<{
            encode([]: []): string;
        }>;
        create: TypedFunctionDescription<{
            encode([_components, _units, _modules, _manager, _name, _symbol]: [string[], BigNumberish[], string[], string, string, string]): string;
        }>;
    };
    events: {
        SetTokenCreated: TypedEventDescription<{
            encodeTopics([_setToken, _manager, _name, _symbol]: [string | null, null, null, null]): string[];
        }>;
    };
}
export declare class SetTokenCreator extends Contract {
    connect(signerOrProvider: Signer | Provider | string): SetTokenCreator;
    attach(addressOrName: string): SetTokenCreator;
    deployed(): Promise<SetTokenCreator>;
    on(event: EventFilter | string, listener: Listener): SetTokenCreator;
    once(event: EventFilter | string, listener: Listener): SetTokenCreator;
    addListener(eventName: EventFilter | string, listener: Listener): SetTokenCreator;
    removeAllListeners(eventName: EventFilter | string): SetTokenCreator;
    removeListener(eventName: any, listener: Listener): SetTokenCreator;
    interface: SetTokenCreatorInterface;
    functions: {
        controller(): Promise<string>;
        create(_components: string[], _units: BigNumberish[], _modules: string[], _manager: string, _name: string, _symbol: string, overrides?: TransactionOverrides): Promise<ContractTransaction>;
    };
    controller(): Promise<string>;
    create(_components: string[], _units: BigNumberish[], _modules: string[], _manager: string, _name: string, _symbol: string, overrides?: TransactionOverrides): Promise<ContractTransaction>;
    filters: {
        SetTokenCreated(_setToken: string | null, _manager: null, _name: null, _symbol: null): EventFilter;
    };
    estimate: {
        controller(): Promise<BigNumber>;
        create(_components: string[], _units: BigNumberish[], _modules: string[], _manager: string, _name: string, _symbol: string): Promise<BigNumber>;
    };
}
export {};
