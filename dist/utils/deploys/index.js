"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var deployMocks_1 = __importDefault(require("./deployMocks"));
var deployModules_1 = __importDefault(require("./deployModules"));
var deployCoreContracts_1 = __importDefault(require("./deployCoreContracts"));
var deployExternal_1 = __importDefault(require("./deployExternal"));
var DeployHelper = /** @class */ (function () {
    function DeployHelper(deployerSigner) {
        this.mocks = new deployMocks_1.default(deployerSigner);
        this.modules = new deployModules_1.default(deployerSigner);
        this.core = new deployCoreContracts_1.default(deployerSigner);
        this.external = new deployExternal_1.default(deployerSigner);
    }
    return DeployHelper;
}());
exports.default = DeployHelper;
