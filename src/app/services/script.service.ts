import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ScriptService {
  public userInfo: any;
  constructor(private http: HttpClient) {
    //this.getJSON("./assets/success.json").subscribe(data => {console.log(data);});
  }
  public getJSON(str: string):string {

    this.http.get(str)
      .subscribe(data =>
      {
        //console.log(data);
        this.userInfo = data
      });
    return this.userInfo;
  }
}
