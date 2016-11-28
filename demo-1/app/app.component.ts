import { Component } from '@angular/core';
import {service} from './app.component.service';

@Component({
    moduleId:module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html'
})
export class AppComponent {
    constructor(private service:service){
console.log("hello")
console.log(this.getData())
console.log(this.service.getData())

    }
    getData(){

 this.service.getData();

    }
}
