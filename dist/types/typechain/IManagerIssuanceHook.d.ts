import { Contract, ContractTransaction, EventFilter, Signer } from "ethers";
import { Listener, Provider } from "ethers/providers";
import { BigNumber, BigNumberish, Interface } from "ethers/utils";
import { TransactionOverrides, TypedFunctionDescription } from ".";
interface IManagerIssuanceHookInterface extends Interface {
    functions: {
        invokePreIssueHook: TypedFunctionDescription<{
            encode([_setToken, _issueQuantity, _sender, _to]: [string, BigNumberish, string, string]): string;
        }>;
        invokePreRedeemHook: TypedFunctionDescription<{
            encode([_setToken, _redeemQuantity, _sender, _to]: [string, BigNumberish, string, string]): string;
        }>;
    };
    events: {};
}
export declare class IManagerIssuanceHook extends Contract {
    connect(signerOrProvider: Signer | Provider | string): IManagerIssuanceHook;
    attach(addressOrName: string): IManagerIssuanceHook;
    deployed(): Promise<IManagerIssuanceHook>;
    on(event: EventFilter | string, listener: Listener): IManagerIssuanceHook;
    once(event: EventFilter | string, listener: Listener): IManagerIssuanceHook;
    addListener(eventName: EventFilter | string, listener: Listener): IManagerIssuanceHook;
    removeAllListeners(eventName: EventFilter | string): IManagerIssuanceHook;
    removeListener(eventName: any, listener: Listener): IManagerIssuanceHook;
    interface: IManagerIssuanceHookInterface;
    functions: {
        invokePreIssueHook(_setToken: string, _issueQuantity: BigNumberish, _sender: string, _to: string, overrides?: TransactionOverrides): Promise<ContractTransaction>;
        invokePreRedeemHook(_setToken: string, _redeemQuantity: BigNumberish, _sender: string, _to: string, overrides?: TransactionOverrides): Promise<ContractTransaction>;
    };
    invokePreIssueHook(_setToken: string, _issueQuantity: BigNumberish, _sender: string, _to: string, overrides?: TransactionOverrides): Promise<ContractTransaction>;
    invokePreRedeemHook(_setToken: string, _redeemQuantity: BigNumberish, _sender: string, _to: string, overrides?: TransactionOverrides): Promise<ContractTransaction>;
    filters: {};
    estimate: {
        invokePreIssueHook(_setToken: string, _issueQuantity: BigNumberish, _sender: string, _to: string): Promise<BigNumber>;
        invokePreRedeemHook(_setToken: string, _redeemQuantity: BigNumberish, _sender: string, _to: string): Promise<BigNumber>;
    };
}
export {};
