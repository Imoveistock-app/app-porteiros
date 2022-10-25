export abstract class UserEditPersonalDataRequestDto {
    birthDate: Date;
    state: string;
    city: string;
    bankInfo?: {
        name: string,
        agencyNumber: string,
        accountNumber: string
    }
}