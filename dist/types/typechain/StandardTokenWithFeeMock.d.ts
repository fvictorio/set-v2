import { Contract, ContractTransaction, EventFilter, Signer } from "ethers";
import { Listener, Provider } from "ethers/providers";
import { BigNumber, BigNumberish, Interface } from "ethers/utils";
import { TransactionOverrides, TypedEventDescription, TypedFunctionDescription } from ".";
interface StandardTokenWithFeeMockInterface extends Interface {
    functions: {
        _allowed: TypedFunctionDescription<{
            encode([,]: [string, string]): string;
        }>;
        _balances: TypedFunctionDescription<{
            encode([]: [string]): string;
        }>;
        _totalSupply: TypedFunctionDescription<{
            encode([]: []): string;
        }>;
        allowance: TypedFunctionDescription<{
            encode([owner, spender]: [string, string]): string;
        }>;
        approve: TypedFunctionDescription<{
            encode([spender, value]: [string, BigNumberish]): string;
        }>;
        balanceOf: TypedFunctionDescription<{
            encode([owner]: [string]): string;
        }>;
        decimals: TypedFunctionDescription<{
            encode([]: []): string;
        }>;
        decreaseAllowance: TypedFunctionDescription<{
            encode([spender, subtractedValue]: [string, BigNumberish]): string;
        }>;
        fee: TypedFunctionDescription<{
            encode([]: []): string;
        }>;
        increaseAllowance: TypedFunctionDescription<{
            encode([spender, addedValue]: [string, BigNumberish]): string;
        }>;
        name: TypedFunctionDescription<{
            encode([]: []): string;
        }>;
        setFee: TypedFunctionDescription<{
            encode([_fee]: [BigNumberish]): string;
        }>;
        symbol: TypedFunctionDescription<{
            encode([]: []): string;
        }>;
        totalSupply: TypedFunctionDescription<{
            encode([]: []): string;
        }>;
        transfer: TypedFunctionDescription<{
            encode([_to, _value]: [string, BigNumberish]): string;
        }>;
        transferFrom: TypedFunctionDescription<{
            encode([_from, _to, _value]: [string, string, BigNumberish]): string;
        }>;
    };
    events: {
        Approval: TypedEventDescription<{
            encodeTopics([owner, spender, value]: [string | null, string | null, null]): string[];
        }>;
        Transfer: TypedEventDescription<{
            encodeTopics([from, to, value]: [string | null, string | null, null]): string[];
        }>;
    };
}
export declare class StandardTokenWithFeeMock extends Contract {
    connect(signerOrProvider: Signer | Provider | string): StandardTokenWithFeeMock;
    attach(addressOrName: string): StandardTokenWithFeeMock;
    deployed(): Promise<StandardTokenWithFeeMock>;
    on(event: EventFilter | string, listener: Listener): StandardTokenWithFeeMock;
    once(event: EventFilter | string, listener: Listener): StandardTokenWithFeeMock;
    addListener(eventName: EventFilter | string, listener: Listener): StandardTokenWithFeeMock;
    removeAllListeners(eventName: EventFilter | string): StandardTokenWithFeeMock;
    removeListener(eventName: any, listener: Listener): StandardTokenWithFeeMock;
    interface: StandardTokenWithFeeMockInterface;
    functions: {
        _allowed(arg0: string, arg1: string): Promise<BigNumber>;
        _balances(arg0: string): Promise<BigNumber>;
        _totalSupply(): Promise<BigNumber>;
        allowance(owner: string, spender: string): Promise<BigNumber>;
        approve(spender: string, value: BigNumberish, overrides?: TransactionOverrides): Promise<ContractTransaction>;
        balanceOf(owner: string): Promise<BigNumber>;
        decimals(): Promise<BigNumber>;
        decreaseAllowance(spender: string, subtractedValue: BigNumberish, overrides?: TransactionOverrides): Promise<ContractTransaction>;
        fee(): Promise<BigNumber>;
        increaseAllowance(spender: string, addedValue: BigNumberish, overrides?: TransactionOverrides): Promise<ContractTransaction>;
        name(): Promise<string>;
        setFee(_fee: BigNumberish, overrides?: TransactionOverrides): Promise<ContractTransaction>;
        symbol(): Promise<string>;
        totalSupply(): Promise<BigNumber>;
        transfer(_to: string, _value: BigNumberish, overrides?: TransactionOverrides): Promise<ContractTransaction>;
        transferFrom(_from: string, _to: string, _value: BigNumberish, overrides?: TransactionOverrides): Promise<ContractTransaction>;
    };
    _allowed(arg0: string, arg1: string): Promise<BigNumber>;
    _balances(arg0: string): Promise<BigNumber>;
    _totalSupply(): Promise<BigNumber>;
    allowance(owner: string, spender: string): Promise<BigNumber>;
    approve(spender: string, value: BigNumberish, overrides?: TransactionOverrides): Promise<ContractTransaction>;
    balanceOf(owner: string): Promise<BigNumber>;
    decimals(): Promise<BigNumber>;
    decreaseAllowance(spender: string, subtractedValue: BigNumberish, overrides?: TransactionOverrides): Promise<ContractTransaction>;
    fee(): Promise<BigNumber>;
    increaseAllowance(spender: string, addedValue: BigNumberish, overrides?: TransactionOverrides): Promise<ContractTransaction>;
    name(): Promise<string>;
    setFee(_fee: BigNumberish, overrides?: TransactionOverrides): Promise<ContractTransaction>;
    symbol(): Promise<string>;
    totalSupply(): Promise<BigNumber>;
    transfer(_to: string, _value: BigNumberish, overrides?: TransactionOverrides): Promise<ContractTransaction>;
    transferFrom(_from: string, _to: string, _value: BigNumberish, overrides?: TransactionOverrides): Promise<ContractTransaction>;
    filters: {
        Approval(owner: string | null, spender: string | null, value: null): EventFilter;
        Transfer(from: string | null, to: string | null, value: null): EventFilter;
    };
    estimate: {
        _allowed(arg0: string, arg1: string): Promise<BigNumber>;
        _balances(arg0: string): Promise<BigNumber>;
        _totalSupply(): Promise<BigNumber>;
        allowance(owner: string, spender: string): Promise<BigNumber>;
        approve(spender: string, value: BigNumberish): Promise<BigNumber>;
        balanceOf(owner: string): Promise<BigNumber>;
        decimals(): Promise<BigNumber>;
        decreaseAllowance(spender: string, subtractedValue: BigNumberish): Promise<BigNumber>;
        fee(): Promise<BigNumber>;
        increaseAllowance(spender: string, addedValue: BigNumberish): Promise<BigNumber>;
        name(): Promise<BigNumber>;
        setFee(_fee: BigNumberish): Promise<BigNumber>;
        symbol(): Promise<BigNumber>;
        totalSupply(): Promise<BigNumber>;
        transfer(_to: string, _value: BigNumberish): Promise<BigNumber>;
        transferFrom(_from: string, _to: string, _value: BigNumberish): Promise<BigNumber>;
    };
}
export {};
