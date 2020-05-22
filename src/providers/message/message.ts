import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the MessageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MessageProvider {

	private data:any;
	//private url : string ="../assets/risk.json";
  private url : string = 'https://sheetsu.com/apis/v1.0su/432fe07b6b19';

  constructor(public http: HttpClient) {
    
  }


     getData():any{
  
   return this.http.get(this.url);
               
 };


private extractData(res: Response) {

  let body = res.json();
  return body || { };
}

private handleError (error: Response | any) {

}

}
