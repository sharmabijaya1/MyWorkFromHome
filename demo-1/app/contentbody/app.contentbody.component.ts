import {Component} from '@angular/core';
import {service} from '../app.component.service';


@Component({
    moduleId:module.id,
    selector:"app-content",
    templateUrl:"content.html"
})
export class ContentSection {
    private titlesArray:any;
    private colOneArray:any=new Array();
    private colTwoArray:any=new Array();
    constructor(private service:service){
        
        this.titlesArray = service.getContentData();
        var colOne=0,colTwo = 0;

    for(var i=0;i<this.titlesArray.length;i++){
        if(i%2==0){
            this.colOneArray[colOne] = this.titlesArray[i];
            colOne++;
        }else{
            this.colTwoArray[colTwo] = this.titlesArray[i];
            colTwo++;
    }
}

    }
}