"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var app_component_service_1 = require('../app.component.service');
var ContentSection = (function () {
    function ContentSection(service) {
        this.service = service;
        this.colOneArray = new Array();
        this.colTwoArray = new Array();
        this.titlesArray = service.getContentData();
        var colOne = 0, colTwo = 0;
        for (var i = 0; i < this.titlesArray.length; i++) {
            if (i % 2 == 0) {
                this.colOneArray[colOne] = this.titlesArray[i];
                colOne++;
            }
            else {
                this.colTwoArray[colTwo] = this.titlesArray[i];
                colTwo++;
            }
        }
    }
    ContentSection = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "app-content",
            templateUrl: "content.html"
        }), 
        __metadata('design:paramtypes', [app_component_service_1.service])
    ], ContentSection);
    return ContentSection;
}());
exports.ContentSection = ContentSection;
//# sourceMappingURL=app.contentbody.component.js.map