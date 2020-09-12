import { Signer } from "ethers";
import { Provider } from "ethers/providers";
import { ISetValuer } from "./ISetValuer";
export declare class ISetValuerFactory {
    static connect(address: string, signerOrProvider: Signer | Provider): ISetValuer;
}
