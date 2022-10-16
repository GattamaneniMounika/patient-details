import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(private _http: HttpClient) { }
    //Now here i will define the Post,Get,PUT,DELETE 0
    //create patient using post method
    postPatient(data: any) {
        return this._http.post<any>("http://localhost:3000/posts", data).pipe(map((res: any) => {
            return res;
        }))
    }
    //get patient data using get method
    getPatient(data: any) {
        return this._http.get<any>("http://localhost:3000/posts").pipe(map((res: any) => {
            return res;
        }))
    }
    //update patint using put method
    updatePatient(data: any, id: number) {
        return this._http.put<any>("http://localhost:3000/posts/" + id, data).pipe(map((res: any) => {
            return res;
        }))
    }
    //delete patint using put method
    deletePatient(id: number) {
        return this._http.delete<any>("http://localhost:3000/posts" + id).pipe(map((res: any) => {
            return res;
        }))


    }
}
