import {Component,OnInit} from '@angular/core';
import {service} from '../app.component.service';

@Component({
    moduleId:module.id,
    selector:"app-header",
    templateUrl:"header.html"
})
export class HeaderSection implements OnInit {
    private userDetails:any;
    constructor(private service:service){
        
    }
     ngOnInit() {this.userDetails = this.service.getLogedUserdetails(); }
}