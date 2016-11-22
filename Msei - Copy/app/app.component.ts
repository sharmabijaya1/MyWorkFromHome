import { Component } from '@angular/core';
import {service} from './app.component.service';

@Component({
    moduleId:module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html'
})
export class AppComponent {
    constructor(private service:service){

    }
    getData(){

 this.service.getData();

    }
}
