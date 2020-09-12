import { Contract, EventFilter, Signer } from "ethers";
import { Listener, Provider } from "ethers/providers";
import { BigNumber, Interface } from "ethers/utils";
import { TypedFunctionDescription } from ".";
interface IOracleInterface extends Interface {
    functions: {
        read: TypedFunctionDescription<{
            encode([]: []): string;
        }>;
    };
    events: {};
}
export declare class IOracle extends Contract {
    connect(signerOrProvider: Signer | Provider | string): IOracle;
    attach(addressOrName: string): IOracle;
    deployed(): Promise<IOracle>;
    on(event: EventFilter | string, listener: Listener): IOracle;
    once(event: EventFilter | string, listener: Listener): IOracle;
    addListener(eventName: EventFilter | string, listener: Listener): IOracle;
    removeAllListeners(eventName: EventFilter | string): IOracle;
    removeListener(eventName: any, listener: Listener): IOracle;
    interface: IOracleInterface;
    functions: {
        read(): Promise<BigNumber>;
    };
    read(): Promise<BigNumber>;
    filters: {};
    estimate: {
        read(): Promise<BigNumber>;
    };
}
export {};
