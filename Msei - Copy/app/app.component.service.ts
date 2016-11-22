import { Injectable } from '@angular/core';
import { Http, Response, Headers} from '@angular/http';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap'

@Injectable()
export class service{
    constructor(private http : Http){
  }
getData(){
     let headersObj = new Headers();
    //headers.append('Accept', 'application/json');
        headersObj.append('Access-Control-Allow-Headers', 'Content-Type');
        headersObj.append('Access-Control-Allow-Methods', 'GET');
        headersObj.append('Access-Control-Allow-Origin', '*');
 this.http
      .get(`http://localhost:8080/Restaurant/foodcategory/getCategories`, {headers: headersObj})
      .map((response)=>{
          
          console.log(response.json().data)
      })
      .catch((rr)=>{ alert ();console.log(rr);return rr;}).subscribe(
                       heroes => console.log( heroes),
                       error =>  console.log(error));
     

}
}