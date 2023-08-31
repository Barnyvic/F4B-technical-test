import { AccountTypes } from "../enums/accountType.enum";

export interface Account {
    accountNumber: string;
    accountHolderName: string;
    dob: string;
    accountType: AccountTypes;
    balance: number;
}