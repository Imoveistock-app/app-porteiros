export class UserGetResponseDto {
    phone: string;
    email: string;
    name: string;
    cpf: string;
    status: string;
    profile?: Profile;
    personalData?: PersonalData;
    workData?: WorkData;
    photo?: Photo;
}

class Profile {
    name?: string;
    description?: string;
    apiFunctions?: ApiFunction[]
}

export abstract class PersonalData {
    birthDate?: Date;
    state?: string;
    city?: string;
    bankInfo?: PersonalDataBankInfo;
}

class PersonalDataBankInfo{
    name?: string;
    agencyNumber?: string;
    accountNumber?: string;
}

class WorkData {
    workSchedule?: string;
    morningPorter1?: string;
    morningPorter2?: string;
    afternoonPorter1?: string;
    afternoonPorter2?: string;
    nigthPorter1?: string;
    nigthPorter2?: string;
    extraPorter?:string;
    janitor?: string;
    receptionist?: string;
    vigilant?: string;
    supervisor?: string;
    manager?: string;
    condominium?: WorkDataCondominium;
}

class WorkDataCondominium {
    name?: string;
    addressStreet?: string;
    addressNumber?: string;
    addressDistrict?: string;
    addressCep?: string;
    addressComplement?: string;
    syndic?: string;
    syndicContact?: string;
    category?: string;
    numberOfTowers?: number;
    howManyFloors?: number;
    complement?: string;
    apartmentsPerrFloor?: number;
    howManyApartmentsForLease?: number;
    howManyApartmentsForSale?: number;
}

class ApiFunction {
    name?: string;
}

class Photo {
    key?: string;
    location?: string;
}