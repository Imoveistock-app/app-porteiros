import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { BalanceResponseDto } from "../dtos/balance-response.dto";
import { IndicateRequestDto } from "../dtos/indicate-request.dto";
import { ListPropertyIndicationResponseDto } from "../dtos/list-property-indication-response.dto";
import { PaginateQuerryRequestDto } from "../dtos/paginate-querry-request.dto";
import { IndicateResponseDto } from "../dtos/property-indication-response.dto";
import { UserRegisterRequestDto } from "../dtos/user-register-request.dto";
import { UserRegisterResponseDto } from "../dtos/user-register-response.dto";
import { BaseService } from "./base.service";

@Injectable({
    providedIn: 'root'
})
export class PropertyIndicationService extends BaseService {

    url: string = `${environment.apis.imoveistock}property-indication`

    constructor(
        private httpClient: HttpClient
    ) {
        super();
    }

    register(dto: IndicateRequestDto): Observable<IndicateResponseDto> {
        return this.httpClient
            .post(`${this.url}`, dto, this.authorizedHeader())
            .pipe(map(this.extractData), catchError(this.serviceError));
    }

    list(dto: PaginateQuerryRequestDto): Observable<ListPropertyIndicationResponseDto[]> {
        return this.httpClient
            .get(`${this.url}?take=${dto.take}&skip=${dto.skip}`, this.authorizedHeader())
            .pipe(map(this.extractData), catchError(this.serviceError));
    }

    listByStatus(dto: PaginateQuerryRequestDto): Observable<ListPropertyIndicationResponseDto[]> {
        return this.httpClient
            .get(`${this.url}/status?take=${dto.take}&skip=${dto.skip}&processStatus=${dto.processStatus}`, this.authorizedHeader())
            .pipe(map(this.extractData), catchError(this.serviceError));
    }

    getBalance(): Observable<BalanceResponseDto> {
        return this.httpClient
            .get(`${this.url}/balance`, this.authorizedHeader())
            .pipe(map(this.extractData), catchError(this.serviceError));
    }
}