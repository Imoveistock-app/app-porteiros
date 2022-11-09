export abstract class UserUpdateWorkDataRequestDto {
    workSchedule: string;

    morningPorter1: string;

    morningPorter2?: string;

    afternoonPorter1?: string;

    nigthPorter1: string;

    nigthPorter2?: string;

    extraPorter?: string;

    janitor: string;

    receptionist?: string;

    condominium: UserUpdateWorkDataCondomimiumDto;
}

class UserUpdateWorkDataCondomimiumDto {
    name: string;

    addressStreet: string;

    addressNumber: string;

    addressDistrict: string;

    addressCep: string;

    addressComplement: string;

    syndic: string;

    syndicContact: string;

    category: string;

    numberOfTowers: number;

    howManyFloors: number;

    complement: string;

    apartmentsPerrFloor: number;

    howManyApartmentsForLease: number;

    howManyApartmentsForSale: number;
}