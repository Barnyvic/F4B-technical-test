import { Router } from "express";
import { createAccount, findAllAccounts, findUserByAccountNumber } from "../controllers/accountController";


const accountRouter = Router();


accountRouter.post("/create-account", createAccount)
accountRouter.get("/account/:accountNumber", findUserByAccountNumber)
accountRouter.get("/accounts", findAllAccounts)

export default accountRouter;