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

  public sendEmail(data: any) {
    //const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };
    const body = {
      name: data.name.value,
      company: data.company.value,
      email: data.email.value,
      phone: data.phone.value,
      message: data.message.value
    };


    this.http.post<any>('http://localhost:7218/api/email', body)
      .subscribe(
        (data) => {
          console.log(data);
        },
        (error) => {
          console.error(error);
        }
      );
  }
}
