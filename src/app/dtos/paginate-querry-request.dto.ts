export abstract class PaginateQuerryRequestDto {
    skip: number;
    take: number;
    processStatus?: string; 
}