import { Address } from "../types";
import { Signer } from "ethers";
import { BigNumberish, BigNumber } from "ethers/utils";
import { AddressArrayUtilsMock, ExplicitErc20Mock, InvokeMock, ManagerIssuanceHookMock, ModuleIssuanceHookMock, ModuleBaseMock, OracleAdapterMock, OracleMock, PositionMock, PreciseUnitMathMock, ResourceIdentifierMock, StandardTokenMock, StandardTokenWithFeeMock } from "../contracts";
export default class DeployMocks {
    private _deployerSigner;
    constructor(deployerSigner: Signer);
    deployExplicitErc20Mock(): Promise<ExplicitErc20Mock>;
    deployInvokeMock(): Promise<InvokeMock>;
    deployManagerIssuanceHookMock(): Promise<ManagerIssuanceHookMock>;
    deployModuleIssuanceHookMock(): Promise<ModuleIssuanceHookMock>;
    deployAddressArrayUtilsMock(): Promise<AddressArrayUtilsMock>;
    deployModuleBaseMock(controllerAddress: Address): Promise<ModuleBaseMock>;
    deployOracleMock(initialValue: BigNumberish): Promise<OracleMock>;
    deployOracleAdapterMock(asset: Address, dummyPrice: BigNumber): Promise<OracleAdapterMock>;
    deployPositionMock(): Promise<PositionMock>;
    deployPreciseUnitMathMock(): Promise<PreciseUnitMathMock>;
    deployResourceIdentifierMock(): Promise<ResourceIdentifierMock>;
    deployTokenMock(initialAccount: Address, initialBalance?: BigNumberish, decimals?: BigNumberish, name?: string, symbol?: string): Promise<StandardTokenMock>;
    deployTokenWithFeeMock(initialAccount: Address, initialBalance?: BigNumberish, fee?: BigNumberish, name?: string, symbol?: string): Promise<StandardTokenWithFeeMock>;
    /*************************************
     * Instance getters
     ************************************/
    getTokenMock(token: Address): Promise<StandardTokenMock>;
}
