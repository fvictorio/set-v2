import { Signer } from "ethers";
import { BigNumberish } from "ethers/utils";
import { Controller, IntegrationRegistry, PriceOracle, SetToken, SetTokenCreator, SetValuer } from "./../contracts";
import { Address } from "./../types";
export default class DeployCoreContracts {
    private _deployerSigner;
    constructor(deployerSigner: Signer);
    deployController(feeRecipient: Address): Promise<Controller>;
    getController(controllerAddress: Address): Promise<Controller>;
    deploySetTokenCreator(controller: Address): Promise<SetTokenCreator>;
    deploySetToken(_components: Address[], _units: BigNumberish[], _modules: Address[], _controller: Address, _manager: Address, _name: string, _symbol: string): Promise<SetToken>;
    deployPriceOracle(controller: Address, masterQuoteAsset: Address, adapters: Address[], assetOnes: Address[], assetTwos: Address[], oracles: Address[]): Promise<PriceOracle>;
    deployIntegrationRegistry(controller: Address): Promise<IntegrationRegistry>;
    deploySetValuer(controller: Address): Promise<SetValuer>;
}
