import { Injectable } from '@angular/core';
import { Http, Headers} from "@angular/http";
import "rxjs/add/operator/map"
@Injectable()
export class FeathersService {
  host:string
  constructor(private _http:Http) {
    this.host = 'http://localhost:3030/logs'
  }
  getLogs(){
    return this._http.get(this.host)
      .map( res => res.json())
  }
  addLog(log){
    var headers = new Headers()
    headers.append('Content-Type', 'application/json')
    return this._http.post(this.host, JSON.stringify(log), {headers: headers})
      .map(res => res.json())
  }
  deleteLog(id){
    return this._http.delete(this.host + "/" + id)
  }
}
