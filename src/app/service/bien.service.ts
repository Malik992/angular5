import { Injectable } from '@angular/core';
import { Bien } from "../interface/bien";
import { Typebien } from "../interface/typebien";
import { Localite } from "../interface/localite";
import {Observable, ObservableInput} from 'rxjs/Observable';
import { HttpClient ,HttpHeaders } from '@angular/common/http';
const httpOptions={
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}
@Injectable()
export class BienService {

  constructor( private http :HttpClient) { }
        public getAllBien():Observable<any>{
        return this.http.get('http://127.0.0.1:8000/bien');
    }
        public getBien(id):Observable<any>{
       return this.http.post<any>('http://127.0.0.1:8000/detail', JSON.parse(JSON.stringify(id)),httpOptions);
    }
        public getLocalite():Observable<any>{
       return this.http.get('http://127.0.0.1:8000/localite');
    }

        public getTypebien():Observable<any>{
         return this.http.get<any>('http://127.0.0.1:8000/type');
    }

    // ****
    public getAdd(id): Observable<any> {
      return this.http.post<any>('http://127.0.0.1:8000/add', JSON.parse(JSON.stringify(id)) , httpOptions);
    }

    public getConnexionClient(id): Observable<any> {
      return this.http.post<any>('http://127.0.0.1:8000/connexionclient', JSON.parse(JSON.stringify(id)) , httpOptions);
    }

    public getAddReserver(id): Observable<any> {
  return this.http.post<any>('http://127.0.0.1:8000/addreservation', JSON.parse(JSON.stringify(id)) , httpOptions);
}
}
