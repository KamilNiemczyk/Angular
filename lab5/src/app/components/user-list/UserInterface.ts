export interface IUser {
    id: number;
    name : string;
    lastname : string;
    phone : number;
    date : string;
    address : {
        street : string;
        number : number;
        flatNumber : number;
        postalCode : number;
        city : string;
    }
}
