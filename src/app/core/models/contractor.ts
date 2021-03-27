import { BaseModel } from "./base-model";

export class Contractor {
    code?: number;
    personType?: BaseModel;
    idType?: BaseModel;
    id?: string;
    verificationDigit?: string;
    name?: string;
    lastName?: string;
    email?: string;
    phone?: string;
}
