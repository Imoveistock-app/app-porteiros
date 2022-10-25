export abstract class UserGetResponseDto {
    phone: string;
    email: string;
    name: string;
    cpf: string;
    status: string;
    profile: Profile;
    personalData: PersonalData;
    photo?: Photo;
}

export abstract class Profile {
    name: string;
    description: string;
    apiFunctions: ApiFunction[]
}

export abstract class PersonalData {
    birthDate: Date;
    state: string;
    city: string;
    bankInfo?: BankInfo
}

export abstract class ApiFunction {
    name: string;
}

export abstract class BankInfo {
    name: string;
    agencyNumber: string;
    accountNumber: string;
}

class Photo {
    key: string;
    location: string;
}