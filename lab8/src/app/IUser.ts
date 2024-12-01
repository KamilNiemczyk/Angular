import { IAddress } from './IAddress';
export interface IUser {
    id: number;
    name: string;
    lastName: string;
    email: string;
    addresses: IAddress[];
}