import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ListResponse } from './list-response';
import {  map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  endpoint: string = `${ environment.api }`;

  constructor(
    private http: HttpClient
  ) { }


  get(idList:number) {
    return this.http.get<ListResponse>(environment.api  + "getList/"+  idList ).pipe(
            map((data: any) => data)
    )
  }

  deleteItem(idItem:number): Observable<any>{
    return this.http.delete(environment.api  + "Delete/"+  idItem);
  }

  createItem(item:any={}){
    return this.http.post(environment.api + 'Store', item);
  }

  updateItem(item:any={}){
    return this.http.put(environment.api + 'Edit', item);
  }
}
