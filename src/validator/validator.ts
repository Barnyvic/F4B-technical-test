import Joi from 'joi';
import { AccountTypes } from '../enums/accountType.enum';

export const accountSchema = Joi.object({
    accountHolderName: Joi.string().required(),
    dob: Joi.date().iso().required(),
    accountType: Joi.string().valid(...Object.values(AccountTypes)).required(),
    initialBalance: Joi.number().min(0).required(),
});