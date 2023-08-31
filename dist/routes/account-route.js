"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const accountController_1 = require("../controllers/accountController");
const accountRouter = (0, express_1.Router)();
accountRouter.post("/create-account", accountController_1.createAccount);
accountRouter.get("/account/:accountNumber", accountController_1.findUserByAccountNumber);
accountRouter.get("/accounts", accountController_1.findAllAccounts);
exports.default = accountRouter;
//# sourceMappingURL=account-route.js.map