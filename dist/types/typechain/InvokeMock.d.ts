import { Contract, ContractTransaction, EventFilter, Signer } from "ethers";
import { Listener, Provider } from "ethers/providers";
import { BigNumber, BigNumberish, Interface } from "ethers/utils";
import { TransactionOverrides, TypedFunctionDescription } from ".";
interface InvokeMockInterface extends Interface {
    functions: {
        initializeModuleOnSet: TypedFunctionDescription<{
            encode([_setToken]: [string]): string;
        }>;
        testInvokeApprove: TypedFunctionDescription<{
            encode([_setToken, _token, _spender, _quantity]: [string, string, string, BigNumberish]): string;
        }>;
        testInvokeTransfer: TypedFunctionDescription<{
            encode([_setToken, _token, _spender, _quantity]: [string, string, string, BigNumberish]): string;
        }>;
        testInvokeUnwrapWETH: TypedFunctionDescription<{
            encode([_setToken, _weth, _quantity]: [string, string, BigNumberish]): string;
        }>;
        testInvokeWrapWETH: TypedFunctionDescription<{
            encode([_setToken, _weth, _quantity]: [string, string, BigNumberish]): string;
        }>;
        testStrictInvokeTransfer: TypedFunctionDescription<{
            encode([_setToken, _token, _spender, _quantity]: [string, string, string, BigNumberish]): string;
        }>;
    };
    events: {};
}
export declare class InvokeMock extends Contract {
    connect(signerOrProvider: Signer | Provider | string): InvokeMock;
    attach(addressOrName: string): InvokeMock;
    deployed(): Promise<InvokeMock>;
    on(event: EventFilter | string, listener: Listener): InvokeMock;
    once(event: EventFilter | string, listener: Listener): InvokeMock;
    addListener(eventName: EventFilter | string, listener: Listener): InvokeMock;
    removeAllListeners(eventName: EventFilter | string): InvokeMock;
    removeListener(eventName: any, listener: Listener): InvokeMock;
    interface: InvokeMockInterface;
    functions: {
        initializeModuleOnSet(_setToken: string, overrides?: TransactionOverrides): Promise<ContractTransaction>;
        testInvokeApprove(_setToken: string, _token: string, _spender: string, _quantity: BigNumberish, overrides?: TransactionOverrides): Promise<ContractTransaction>;
        testInvokeTransfer(_setToken: string, _token: string, _spender: string, _quantity: BigNumberish, overrides?: TransactionOverrides): Promise<ContractTransaction>;
        testInvokeUnwrapWETH(_setToken: string, _weth: string, _quantity: BigNumberish, overrides?: TransactionOverrides): Promise<ContractTransaction>;
        testInvokeWrapWETH(_setToken: string, _weth: string, _quantity: BigNumberish, overrides?: TransactionOverrides): Promise<ContractTransaction>;
        testStrictInvokeTransfer(_setToken: string, _token: string, _spender: string, _quantity: BigNumberish, overrides?: TransactionOverrides): Promise<ContractTransaction>;
    };
    initializeModuleOnSet(_setToken: string, overrides?: TransactionOverrides): Promise<ContractTransaction>;
    testInvokeApprove(_setToken: string, _token: string, _spender: string, _quantity: BigNumberish, overrides?: TransactionOverrides): Promise<ContractTransaction>;
    testInvokeTransfer(_setToken: string, _token: string, _spender: string, _quantity: BigNumberish, overrides?: TransactionOverrides): Promise<ContractTransaction>;
    testInvokeUnwrapWETH(_setToken: string, _weth: string, _quantity: BigNumberish, overrides?: TransactionOverrides): Promise<ContractTransaction>;
    testInvokeWrapWETH(_setToken: string, _weth: string, _quantity: BigNumberish, overrides?: TransactionOverrides): Promise<ContractTransaction>;
    testStrictInvokeTransfer(_setToken: string, _token: string, _spender: string, _quantity: BigNumberish, overrides?: TransactionOverrides): Promise<ContractTransaction>;
    filters: {};
    estimate: {
        initializeModuleOnSet(_setToken: string): Promise<BigNumber>;
        testInvokeApprove(_setToken: string, _token: string, _spender: string, _quantity: BigNumberish): Promise<BigNumber>;
        testInvokeTransfer(_setToken: string, _token: string, _spender: string, _quantity: BigNumberish): Promise<BigNumber>;
        testInvokeUnwrapWETH(_setToken: string, _weth: string, _quantity: BigNumberish): Promise<BigNumber>;
        testInvokeWrapWETH(_setToken: string, _weth: string, _quantity: BigNumberish): Promise<BigNumber>;
        testStrictInvokeTransfer(_setToken: string, _token: string, _spender: string, _quantity: BigNumberish): Promise<BigNumber>;
    };
}
export {};
