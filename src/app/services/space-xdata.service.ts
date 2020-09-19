import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class SpaceXDataService {

  constructor(private http: HttpClient) { }

  getSpaceXData(params) {
    const url = "https://api.spaceXdata.com/v3/launches?limit=100" ;
    const spaceXurl = params? url + params : url;
      return this.http.get(spaceXurl).pipe(map((resp)=>{
        return resp;
      })
      )
  }
}
