import { Contract, EventFilter, Signer } from "ethers";
import { Listener, Provider } from "ethers/providers";
import { BigNumber, BigNumberish, Interface } from "ethers/utils";
import { TypedFunctionDescription } from ".";
interface AddressArrayUtilsMockInterface extends Interface {
    functions: {
        testContains: TypedFunctionDescription<{
            encode([A, a]: [string[], string]): string;
        }>;
        testHasDuplicate: TypedFunctionDescription<{
            encode([A]: [string[]]): string;
        }>;
        testIndexOf: TypedFunctionDescription<{
            encode([A, a]: [string[], string]): string;
        }>;
        testPop: TypedFunctionDescription<{
            encode([A, index]: [string[], BigNumberish]): string;
        }>;
        testRemove: TypedFunctionDescription<{
            encode([A, a]: [string[], string]): string;
        }>;
    };
    events: {};
}
export declare class AddressArrayUtilsMock extends Contract {
    connect(signerOrProvider: Signer | Provider | string): AddressArrayUtilsMock;
    attach(addressOrName: string): AddressArrayUtilsMock;
    deployed(): Promise<AddressArrayUtilsMock>;
    on(event: EventFilter | string, listener: Listener): AddressArrayUtilsMock;
    once(event: EventFilter | string, listener: Listener): AddressArrayUtilsMock;
    addListener(eventName: EventFilter | string, listener: Listener): AddressArrayUtilsMock;
    removeAllListeners(eventName: EventFilter | string): AddressArrayUtilsMock;
    removeListener(eventName: any, listener: Listener): AddressArrayUtilsMock;
    interface: AddressArrayUtilsMockInterface;
    functions: {
        testContains(A: string[], a: string): Promise<boolean>;
        testHasDuplicate(A: string[]): Promise<boolean>;
        testIndexOf(A: string[], a: string): Promise<{
            0: BigNumber;
            1: boolean;
        }>;
        testPop(A: string[], index: BigNumberish): Promise<{
            0: string[];
            1: string;
        }>;
        testRemove(A: string[], a: string): Promise<string[]>;
    };
    testContains(A: string[], a: string): Promise<boolean>;
    testHasDuplicate(A: string[]): Promise<boolean>;
    testIndexOf(A: string[], a: string): Promise<{
        0: BigNumber;
        1: boolean;
    }>;
    testPop(A: string[], index: BigNumberish): Promise<{
        0: string[];
        1: string;
    }>;
    testRemove(A: string[], a: string): Promise<string[]>;
    filters: {};
    estimate: {
        testContains(A: string[], a: string): Promise<BigNumber>;
        testHasDuplicate(A: string[]): Promise<BigNumber>;
        testIndexOf(A: string[], a: string): Promise<BigNumber>;
        testPop(A: string[], index: BigNumberish): Promise<BigNumber>;
        testRemove(A: string[], a: string): Promise<BigNumber>;
    };
}
export {};