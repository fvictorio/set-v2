import { Signer } from "ethers";
import { Provider } from "ethers/providers";
import { IController } from "./IController";
export declare class IControllerFactory {
    static connect(address: string, signerOrProvider: Signer | Provider): IController;
}
