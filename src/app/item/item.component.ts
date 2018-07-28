import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-item',
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.css']
})
export class ItemComponent {
   itemId: string;
   constructor(private route: ActivatedRoute ) {
    this.itemId = route.snapshot.params['ItemId'];
   }
}
