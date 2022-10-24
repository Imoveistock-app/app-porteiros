export abstract class ListPropertyIndicationResponseDto {
    public cep: string;
    public address: string;
    public number: string;
    public complement: string;
    public type: string;
    public processStatus: string;
    public businessTypeClosing: string;
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