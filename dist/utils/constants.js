"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ETH_ADDRESS = exports.PRECISE_UNIT = exports.ONE_YEAR_IN_SECONDS = exports.MIN_INT_256 = exports.MAX_INT_256 = exports.ZERO = exports.THREE = exports.TWO = exports.ONE = exports.MAX_UINT_256 = exports.EMPTY_BYTES = exports.ADDRESS_ZERO = exports.POSITION_STATE = exports.MODULE_STATE = void 0;
var ethers_1 = require("ethers");
var utils_1 = require("ethers/utils");
var AddressZero = ethers_1.constants.AddressZero, MaxUint256 = ethers_1.constants.MaxUint256, One = ethers_1.constants.One, Two = ethers_1.constants.Two, Zero = ethers_1.constants.Zero;
exports.MODULE_STATE = {
    "NONE": 0,
    "PENDING": 1,
    "INITIALIZED": 2,
};
exports.POSITION_STATE = {
    "DEFAULT": 0,
    "EXTERNAL": 1,
};
exports.ADDRESS_ZERO = AddressZero;
exports.EMPTY_BYTES = "0x";
exports.MAX_UINT_256 = MaxUint256;
exports.ONE = One;
exports.TWO = Two;
exports.THREE = new utils_1.BigNumber(3);
exports.ZERO = Zero;
exports.MAX_INT_256 = "0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff";
exports.MIN_INT_256 = "-0x8000000000000000000000000000000000000000000000000000000000000000";
exports.ONE_YEAR_IN_SECONDS = new utils_1.BigNumber(31557600);
exports.PRECISE_UNIT = ethers_1.constants.WeiPerEther;
exports.ETH_ADDRESS = "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE";
