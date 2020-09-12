import { Contract, EventFilter, Signer } from "ethers";
import { Listener, Provider } from "ethers/providers";
import { BigNumber, Interface } from "ethers/utils";
import { TypedFunctionDescription } from ".";
interface IStreamingFeeModuleInterface extends Interface {
    functions: {
        feeStates: TypedFunctionDescription<{
            encode([_setToken]: [string]): string;
        }>;
        getFee: TypedFunctionDescription<{
            encode([_setToken]: [string]): string;
        }>;
    };
    events: {};
}
export declare class IStreamingFeeModule extends Contract {
    connect(signerOrProvider: Signer | Provider | string): IStreamingFeeModule;
    attach(addressOrName: string): IStreamingFeeModule;
    deployed(): Promise<IStreamingFeeModule>;
    on(event: EventFilter | string, listener: Listener): IStreamingFeeModule;
    once(event: EventFilter | string, listener: Listener): IStreamingFeeModule;
    addListener(eventName: EventFilter | string, listener: Listener): IStreamingFeeModule;
    removeAllListeners(eventName: EventFilter | string): IStreamingFeeModule;
    removeListener(eventName: any, listener: Listener): IStreamingFeeModule;
    interface: IStreamingFeeModuleInterface;
    functions: {
        feeStates(_setToken: string): Promise<{
            feeRecipient: string;
            maxStreamingFeePercentage: BigNumber;
            streamingFeePercentage: BigNumber;
            lastStreamingFeeTimestamp: BigNumber;
            0: string;
            1: BigNumber;
            2: BigNumber;
            3: BigNumber;
        }>;
        getFee(_setToken: string): Promise<BigNumber>;
    };
    feeStates(_setToken: string): Promise<{
        feeRecipient: string;
        maxStreamingFeePercentage: BigNumber;
        streamingFeePercentage: BigNumber;
        lastStreamingFeeTimestamp: BigNumber;
        0: string;
        1: BigNumber;
        2: BigNumber;
        3: BigNumber;
    }>;
    getFee(_setToken: string): Promise<BigNumber>;
    filters: {};
    estimate: {
        feeStates(_setToken: string): Promise<BigNumber>;
        getFee(_setToken: string): Promise<BigNumber>;
    };
}
export {};
