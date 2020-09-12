import { Contract, EventFilter, Signer } from "ethers";
import { Listener, Provider } from "ethers/providers";
import { BigNumber, Interface } from "ethers/utils";
import { TypedFunctionDescription } from ".";
interface ISetValuerInterface extends Interface {
    functions: {
        calculateSetTokenValuation: TypedFunctionDescription<{
            encode([_setToken, _quoteAsset]: [string, string]): string;
        }>;
    };
    events: {};
}
export declare class ISetValuer extends Contract {
    connect(signerOrProvider: Signer | Provider | string): ISetValuer;
    attach(addressOrName: string): ISetValuer;
    deployed(): Promise<ISetValuer>;
    on(event: EventFilter | string, listener: Listener): ISetValuer;
    once(event: EventFilter | string, listener: Listener): ISetValuer;
    addListener(eventName: EventFilter | string, listener: Listener): ISetValuer;
    removeAllListeners(eventName: EventFilter | string): ISetValuer;
    removeListener(eventName: any, listener: Listener): ISetValuer;
    interface: ISetValuerInterface;
    functions: {
        calculateSetTokenValuation(_setToken: string, _quoteAsset: string): Promise<BigNumber>;
    };
    calculateSetTokenValuation(_setToken: string, _quoteAsset: string): Promise<BigNumber>;
    filters: {};
    estimate: {
        calculateSetTokenValuation(_setToken: string, _quoteAsset: string): Promise<BigNumber>;
    };
}
export {};
