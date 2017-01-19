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
var DocumentsComponent = (function () {
    function DocumentsComponent() {
        this.pageTitle = "Document Dashboard";
        this.documents = [
            {
                title: "My First Doc",
                description: "Lorum Ipsum",
                file_url: "http://google.com",
                updated_at: '11/11/16',
                image_url: 'http://cae-images.atoa.com/images/com_hikashop/upload/thumbnails/400x400f/free_6185.png'
            },
            {
                title: "My Second Doc",
                description: "Lorum Ipsum",
                file_url: "http://google.com",
                updated_at: '11/11/16',
                image_url: 'http://cae-images.atoa.com/images/com_hikashop/upload/thumbnails/400x400f/free_7088.png'
            },
            {
                title: "My Third Doc",
                description: "Lorum Ipsum",
                file_url: "http://google.com",
                updated_at: '11/11/16',
                image_url: 'http://cae-images.atoa.com/images/com_hikashop/upload/free_8100.png'
            }
        ];
    }
    DocumentsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'documents',
            templateUrl: 'documents.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], DocumentsComponent);
    return DocumentsComponent;
}());
exports.DocumentsComponent = DocumentsComponent;
//# sourceMappingURL=documents.component.js.map