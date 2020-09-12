import { Contract, EventFilter, Signer } from "ethers";
import { Listener, Provider } from "ethers/providers";
import { BigNumber, Interface } from "ethers/utils";
import { TypedFunctionDescription } from ".";
interface IPriceOracleInterface extends Interface {
    functions: {
        getPrice: TypedFunctionDescription<{
            encode([_assetOne, _assetTwo]: [string, string]): string;
        }>;
        masterQuoteAsset: TypedFunctionDescription<{
            encode([]: []): string;
        }>;
    };
    events: {};
}
export declare class IPriceOracle extends Contract {
    connect(signerOrProvider: Signer | Provider | string): IPriceOracle;
    attach(addressOrName: string): IPriceOracle;
    deployed(): Promise<IPriceOracle>;
    on(event: EventFilter | string, listener: Listener): IPriceOracle;
    once(event: EventFilter | string, listener: Listener): IPriceOracle;
    addListener(eventName: EventFilter | string, listener: Listener): IPriceOracle;
    removeAllListeners(eventName: EventFilter | string): IPriceOracle;
    removeListener(eventName: any, listener: Listener): IPriceOracle;
    interface: IPriceOracleInterface;
    functions: {
        getPrice(_assetOne: string, _assetTwo: string): Promise<BigNumber>;
        masterQuoteAsset(): Promise<string>;
    };
    getPrice(_assetOne: string, _assetTwo: string): Promise<BigNumber>;
    masterQuoteAsset(): Promise<string>;
    filters: {};
    estimate: {
        getPrice(_assetOne: string, _assetTwo: string): Promise<BigNumber>;
        masterQuoteAsset(): Promise<BigNumber>;
    };
}
export {};
