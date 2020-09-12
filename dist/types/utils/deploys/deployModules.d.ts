import { Signer } from "ethers";
import { BasicIssuanceModule, StreamingFeeModule } from "../contracts";
import { Address } from "../types";
export default class DeployModules {
    private _deployerSigner;
    constructor(deployerSigner: Signer);
    deployBasicIssuanceModule(controller: Address): Promise<BasicIssuanceModule>;
    deployStreamingFeeModule(controller: Address): Promise<StreamingFeeModule>;
}
