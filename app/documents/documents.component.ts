import { Component } from '@angular/core';
import { Document } from './document';


@Component ({
    moduleId: module.id,
    selector: 'documents',
    templateUrl: 'documents.component.html',
    styleUrls: ['documents.component.css'],
})
export class DocumentsComponent {
    pageTitle: string = "Document Dashboard"

    documents: Document[] = [
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
    ]
}

