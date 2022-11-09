import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { UserEditPersonalDataRequestDto } from "../dtos/user-edit-personal-data-request.dto";
import { UserEditPhotoRequestDto } from "../dtos/user-edit-photo-request.dto";
import { UserEditRequestDto } from "../dtos/user-edit-request.dto";
import { UserEditResponseDto } from "../dtos/user-edit-response.dto";
import { UserGetResponseDto } from "../dtos/user-get-response.dto";
import { UserRegisterRequestDto } from "../dtos/user-register-request.dto";
import { UserRegisterResponseDto } from "../dtos/user-register-response.dto";
import { UserUpdateWorkDataRequestDto } from "../dtos/user-update-work-data-request.dto";
import { BaseService } from "./base.service";

@Injectable({
    providedIn: 'root'
})
export class UserService extends BaseService {

    url: string = `${environment.apis.imoveistock}user`

    constructor(
        private httpClient: HttpClient
    ) {
        super();
    }

    register(dto: UserRegisterRequestDto): Observable<UserRegisterResponseDto> {
        return this.httpClient
            .post(`${this.url}`, dto, this.anonymousHeader())
            .pipe(map(this.extractData), catchError(this.serviceError));
    }

    getUser(): Observable<UserGetResponseDto> {
        return this.httpClient
            .get(`${this.url}/authenticated`, this.authorizedHeader())
            .pipe(map(this.extractData), catchError(this.serviceError));
    }

    edit(dto: UserEditRequestDto): Observable<UserEditResponseDto> {
        return this.httpClient
            .patch(`${this.url}`, dto, this.authorizedHeader())
            .pipe(map(this.extractData), catchError(this.serviceError));
    }

    editPhoto(dto: UserEditPhotoRequestDto): Observable<UserGetResponseDto> {
        return this.httpClient
            .patch(`${this.url}/photo`, dto, this.authorizedHeader())
            .pipe(map(this.extractData), catchError(this.serviceError));
    }

    editPersonalData(dto: UserEditPersonalDataRequestDto): Observable<UserGetResponseDto> {
        return this.httpClient
            .patch(`${this.url}/personal-data`, dto, this.authorizedHeader())
            .pipe(map(this.extractData), catchError(this.serviceError));
    }

    editWorkData(dto: UserUpdateWorkDataRequestDto): Observable<UserGetResponseDto> {
        return this.httpClient
            .patch(`${this.url}/work-data`, dto, this.authorizedHeader())
            .pipe(map(this.extractData), catchError(this.serviceError));
    }

}