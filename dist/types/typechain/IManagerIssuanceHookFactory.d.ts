import { Signer } from "ethers";
import { Provider } from "ethers/providers";
import { IManagerIssuanceHook } from "./IManagerIssuanceHook";
export declare class IManagerIssuanceHookFactory {
    static connect(address: string, signerOrProvider: Signer | Provider): IManagerIssuanceHook;
}
