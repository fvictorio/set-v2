"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usdc = exports.bitcoin = exports.gWei = exports.ether = void 0;
var ethers_1 = require("ethers");
var utils_1 = require("ethers/utils");
exports.ether = function (amount) {
    var weiString = ethers_1.ethers.utils.parseEther(amount.toString());
    return new utils_1.BigNumber(weiString);
};
exports.gWei = function (amount) {
    var weiString = new utils_1.BigNumber("1000000000").mul(amount);
    return new utils_1.BigNumber(weiString);
};
exports.bitcoin = function (amount) {
    var weiString = new utils_1.BigNumber("100000000").mul(amount);
    return new utils_1.BigNumber(weiString);
};
exports.usdc = function (amount) {
    var weiString = new utils_1.BigNumber("1000000").mul(amount);
    return new utils_1.BigNumber(weiString);
};
