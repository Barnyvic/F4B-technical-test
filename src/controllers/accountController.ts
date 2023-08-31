import { Request, Response } from "express";
import { errorResponse, handleError, successResponse } from '../utils/response';
import { Account } from "../interface/accountInterface";
import { accountSchema } from "../validator/validator";

const accounts:Account[] = [];
export const createAccount = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { error, value } = accountSchema.validate(req.body);

        if (error) {
            return errorResponse(res, 400, error.details[0].message);
        }
        const { accountHolderName, dob, accountType, initialBalance } =  value;

         if (doesAccountExistForName(accountHolderName)) {
        return errorResponse(res, 400, "An account for this name already exists");
    }

        const accountNumber = generateUniqueAccountNumber();

         const newAccount: Account = {
        accountNumber,
        accountHolderName,
        dob,
        accountType,
        balance: initialBalance,
    };

     accounts.push(newAccount);

     return   successResponse(res, 201, "Account created successfully", newAccount);

    } catch (error) {
         handleError(req, error);
        return errorResponse(res, 500, 'Server error.');
    }
}

export const findUserByAccountNumber = async (req: Request, res: Response): Promise<Response> => {
    try {
        const accountNumber = req.params.accountNumber;

         const account = accounts.find((acc) => acc.accountNumber === accountNumber);

         if (!account) {
         return errorResponse(res, 400, "Account not found");
    }

      return   successResponse(res, 200, "Account found", account);


    } catch (error) {
        handleError(req, error);
        return errorResponse(res, 500, 'Server error.');
    }
}

export const findAllAccounts = async (req: Request, res: Response): Promise<Response> => {
    try {
        if (accounts.length === 0) {
            return errorResponse(res, 404, "No accounts found");
        }
        return successResponse(res, 200, "Accounts found", accounts);
    } catch (error) {
        handleError(req, error);
        return errorResponse(res, 500, 'Server error.');
    }
}


const generateUniqueAccountNumber = (): string => {
   const randomNumber = Math.floor(Math.random() * 1e9);
    const accountNumber = `6${randomNumber.toString().padStart(9, '0')}`; 
    return accountNumber;
}

const doesAccountExistForName = (name: string): boolean => {
    return accounts.some(account => account.accountHolderName === name);
};