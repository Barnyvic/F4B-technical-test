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
Object.defineProperty(exports, "__esModule", { value: true });
exports.findAllAccounts = exports.findUserByAccountNumber = exports.createAccount = void 0;
const response_1 = require("../utils/response");
const validator_1 = require("../validator/validator");
const accounts = [];
const createAccount = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { error, value } = validator_1.accountSchema.validate(req.body);
        if (error) {
            return (0, response_1.errorResponse)(res, 400, error.details[0].message);
        }
        const { accountHolderName, dob, accountType, initialBalance } = value;
        if (doesAccountExistForName(accountHolderName)) {
            return (0, response_1.errorResponse)(res, 400, "An account for this name already exists");
        }
        const accountNumber = generateUniqueAccountNumber();
        const newAccount = {
            accountNumber,
            accountHolderName,
            dob,
            accountType,
            balance: initialBalance,
        };
        accounts.push(newAccount);
        return (0, response_1.successResponse)(res, 201, "Account created successfully", newAccount);
    }
    catch (error) {
        (0, response_1.handleError)(req, error);
        return (0, response_1.errorResponse)(res, 500, 'Server error.');
    }
});
exports.createAccount = createAccount;
const findUserByAccountNumber = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const accountNumber = req.params.accountNumber;
        const account = accounts.find((acc) => acc.accountNumber === accountNumber);
        if (!account) {
            return (0, response_1.errorResponse)(res, 400, "Account not found");
        }
        return (0, response_1.successResponse)(res, 200, "Account found", account);
    }
    catch (error) {
        (0, response_1.handleError)(req, error);
        return (0, response_1.errorResponse)(res, 500, 'Server error.');
    }
});
exports.findUserByAccountNumber = findUserByAccountNumber;
const findAllAccounts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (accounts.length === 0) {
            return (0, response_1.errorResponse)(res, 404, "No accounts found");
        }
        return (0, response_1.successResponse)(res, 200, "Accounts found", accounts);
    }
    catch (error) {
        (0, response_1.handleError)(req, error);
        return (0, response_1.errorResponse)(res, 500, 'Server error.');
    }
});
exports.findAllAccounts = findAllAccounts;
const generateUniqueAccountNumber = () => {
    const randomNumber = Math.floor(Math.random() * 1e9);
    const accountNumber = `6${randomNumber.toString().padStart(9, '0')}`;
    return accountNumber;
};
const doesAccountExistForName = (name) => {
    return accounts.some(account => account.accountHolderName === name);
};
//# sourceMappingURL=accountController.js.map