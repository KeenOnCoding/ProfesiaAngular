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

    //const headers = { 'Host': 'localhost', 'Content-Lengh': '200' };
    this.http.post<any>('https://us-west1-deploy-cea83.cloudfunctions.net/csharp-http-function', body)
      .subscribe(
        (data) => {
          //console.log(JSON.stringify(data));
        },
        (error) => {
          //console.error(error);
        }
      );
  }
}
