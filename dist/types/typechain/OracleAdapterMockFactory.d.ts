import { ContractFactory, Signer } from "ethers";
import { Provider } from "ethers/providers";
import { UnsignedTransaction } from "ethers/utils/transaction";
import { BigNumberish } from "ethers/utils";
import { TransactionOverrides } from ".";
import { OracleAdapterMock } from "./OracleAdapterMock";
export declare class OracleAdapterMockFactory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_asset: string, _dummyPrice: BigNumberish, overrides?: TransactionOverrides): Promise<OracleAdapterMock>;
    getDeployTransaction(_asset: string, _dummyPrice: BigNumberish, overrides?: TransactionOverrides): UnsignedTransaction;
    attach(address: string): OracleAdapterMock;
    connect(signer: Signer): OracleAdapterMockFactory;
    static connect(address: string, signerOrProvider: Signer | Provider): OracleAdapterMock;
}
