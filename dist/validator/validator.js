"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.accountSchema = void 0;
const joi_1 = __importDefault(require("joi"));
const accountType_enum_1 = require("../enums/accountType.enum");
exports.accountSchema = joi_1.default.object({
    accountHolderName: joi_1.default.string().required(),
    dob: joi_1.default.date().iso().required(),
    accountType: joi_1.default.string().valid(...Object.values(accountType_enum_1.AccountTypes)).required(),
    initialBalance: joi_1.default.number().min(0).required(),
});
//# sourceMappingURL=validator.js.map