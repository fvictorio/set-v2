import { JsonRpcProvider, Web3Provider } from "ethers/providers";
import { BigNumber } from "ethers/utils";
import { Address, Position } from "../types";
export declare class ProtocolUtils {
    _provider: Web3Provider | JsonRpcProvider;
    constructor(_provider: Web3Provider | JsonRpcProvider);
    getCreatedSetTokenAddress(txnHash: string | undefined): Promise<string>;
    getDefaultPosition(component: Address, unit: BigNumber): Position;
    getExternalPosition(component: Address, module: Address, unit: BigNumber, data: string): Position;
}
