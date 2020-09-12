"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = require("../common");
var AddressArrayUtilsMockFactory_1 = require("../../typechain/AddressArrayUtilsMockFactory");
var ExplicitErc20MockFactory_1 = require("../../typechain/ExplicitErc20MockFactory");
var InvokeMockFactory_1 = require("../../typechain/InvokeMockFactory");
var ManagerIssuanceHookMockFactory_1 = require("../../typechain/ManagerIssuanceHookMockFactory");
var ModuleBaseMockFactory_1 = require("../../typechain/ModuleBaseMockFactory");
var ModuleIssuanceHookMockFactory_1 = require("../../typechain/ModuleIssuanceHookMockFactory");
var OracleAdapterMockFactory_1 = require("../../typechain/OracleAdapterMockFactory");
var OracleMockFactory_1 = require("../../typechain/OracleMockFactory");
var PositionMockFactory_1 = require("../../typechain/PositionMockFactory");
var PreciseUnitMathMockFactory_1 = require("../../typechain/PreciseUnitMathMockFactory");
var ResourceIdentifierMockFactory_1 = require("../../typechain/ResourceIdentifierMockFactory");
var StandardTokenMockFactory_1 = require("../../typechain/StandardTokenMockFactory");
var StandardTokenWithFeeMockFactory_1 = require("../../typechain/StandardTokenWithFeeMockFactory");
var DeployMocks = /** @class */ (function () {
    function DeployMocks(deployerSigner) {
        this._deployerSigner = deployerSigner;
    }
    DeployMocks.prototype.deployExplicitErc20Mock = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new ExplicitErc20MockFactory_1.ExplicitErc20MockFactory(this._deployerSigner).deploy()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    DeployMocks.prototype.deployInvokeMock = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new InvokeMockFactory_1.InvokeMockFactory(this._deployerSigner).deploy()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    DeployMocks.prototype.deployManagerIssuanceHookMock = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new ManagerIssuanceHookMockFactory_1.ManagerIssuanceHookMockFactory(this._deployerSigner).deploy()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    DeployMocks.prototype.deployModuleIssuanceHookMock = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new ModuleIssuanceHookMockFactory_1.ModuleIssuanceHookMockFactory(this._deployerSigner).deploy()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    DeployMocks.prototype.deployAddressArrayUtilsMock = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new AddressArrayUtilsMockFactory_1.AddressArrayUtilsMockFactory(this._deployerSigner).deploy()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    DeployMocks.prototype.deployModuleBaseMock = function (controllerAddress) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new ModuleBaseMockFactory_1.ModuleBaseMockFactory(this._deployerSigner).deploy(controllerAddress)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    DeployMocks.prototype.deployOracleMock = function (initialValue) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new OracleMockFactory_1.OracleMockFactory(this._deployerSigner).deploy(initialValue)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    DeployMocks.prototype.deployOracleAdapterMock = function (asset, dummyPrice) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new OracleAdapterMockFactory_1.OracleAdapterMockFactory(this._deployerSigner).deploy(asset, dummyPrice)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    DeployMocks.prototype.deployPositionMock = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new PositionMockFactory_1.PositionMockFactory(this._deployerSigner).deploy()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    DeployMocks.prototype.deployPreciseUnitMathMock = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new PreciseUnitMathMockFactory_1.PreciseUnitMathMockFactory(this._deployerSigner).deploy()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    DeployMocks.prototype.deployResourceIdentifierMock = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new ResourceIdentifierMockFactory_1.ResourceIdentifierMockFactory(this._deployerSigner).deploy()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    DeployMocks.prototype.deployTokenMock = function (initialAccount, initialBalance, decimals, name, symbol) {
        if (initialBalance === void 0) { initialBalance = common_1.ether(1000000000); }
        if (decimals === void 0) { decimals = 18; }
        if (name === void 0) { name = "Token"; }
        if (symbol === void 0) { symbol = "Symbol"; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new StandardTokenMockFactory_1.StandardTokenMockFactory(this._deployerSigner)
                            .deploy(initialAccount, initialBalance, name, symbol, decimals)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    DeployMocks.prototype.deployTokenWithFeeMock = function (initialAccount, initialBalance, fee, name, symbol) {
        if (initialBalance === void 0) { initialBalance = common_1.ether(1000000000); }
        if (fee === void 0) { fee = common_1.ether(0.1); }
        if (name === void 0) { name = "Token"; }
        if (symbol === void 0) { symbol = "Symbol"; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new StandardTokenWithFeeMockFactory_1.StandardTokenWithFeeMockFactory(this._deployerSigner)
                            .deploy(initialAccount, initialBalance, name, symbol, fee)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /*************************************
     * Instance getters
     ************************************/
    DeployMocks.prototype.getTokenMock = function (token) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new StandardTokenMockFactory_1.StandardTokenMockFactory(this._deployerSigner).attach(token)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return DeployMocks;
}());
exports.default = DeployMocks;
