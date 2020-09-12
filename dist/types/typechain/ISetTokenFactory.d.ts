import { Signer } from "ethers";
import { Provider } from "ethers/providers";
import { ISetToken } from "./ISetToken";
export declare class ISetTokenFactory {
    static connect(address: string, signerOrProvider: Signer | Provider): ISetToken;
}
