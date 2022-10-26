export abstract class ListPropertyIndicationResponseDto {
    public result: Result;
    public count: number;
}

class Result {
    public cep: string;
    public address: string;
    public number: string;
    public complement: string;
    public typeLease: boolean;
    public typeSale: boolean;
    public processStatus: string;
    public indicator: User;
    public owners: Owner[];
}

class Owner {
    name: string;
    email: string;
    contact: string;
}

class User {
    _id: string;
}