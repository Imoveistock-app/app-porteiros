import { PropertyIndicationOwnerDto } from "./property-indication-owner.dto";

export abstract class IndicateRequestDto {
    cep: string;
    address: string;
    number: string;
    complement: string;
    itsLeasing: boolean;
    itsSale: boolean;
    owners: [PropertyIndicationOwnerDto]
}