import { Signer } from "ethers";
import { Weth9 } from "./../contracts";
export default class DeployExternalContracts {
    private _deployerSigner;
    constructor(deployerSigner: Signer);
    deployWETH(): Promise<Weth9>;
}
