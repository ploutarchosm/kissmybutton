import { Inject, Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { IEnvironment } from "@app/models/env.interface";
import { HTTP_CONFIG } from "@app/constants/global";
import { IRequestFilter } from "@app/models/request-filter.interface";
import { IPaginationViewModel } from "@app/models/pagination.interface";
import {BehaviorSubject, Observable, Subject} from "rxjs";

type IResponseRequest = IPaginationViewModel;

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private readonly endPoint: string;

  // can be moved to a new service and keep request only to follow SOLID
  private _currentPage$ = new BehaviorSubject<number>(1);
  public currentPage$ = this._currentPage$.asObservable();

  private _searchPage$ = new Subject<string>();
  public searchPage$ = this._searchPage$.asObservable();

  constructor(@Inject(HTTP_CONFIG) env: IEnvironment, private http: HttpClient) {
      this.endPoint = env.endPoint + '?apiKey=' + env.apiKey + '&domains=' + env.domains;
  }

  set changePage(page: number) {
    this._currentPage$.next(page);
  }

  set search(query: string) {
    this._searchPage$.next(query);
  }

  list(pageSize: number, page: number, filter?: IRequestFilter): Observable<IResponseRequest> {
    return this.http.get<IResponseRequest>(this.endPoint, {
        params: {
          pageSize,
          page,
          q: filter?.q ?? ''
        }
    });
  }
}
