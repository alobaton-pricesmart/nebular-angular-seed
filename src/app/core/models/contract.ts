import { Contractor } from "./contractor";

export class Contract {
    id?: string;
    description?: string;
    contractor?: Contractor;
    startDate?: string;
    endDate?: string;
}