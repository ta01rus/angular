import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
    selector: 'app-items',
    templateUrl: './items.component.html',
    styleUrls: ['./items.component.css']
})

export class ItemsComponent  {
    id: number;
    constructor(private route: ActivatedRoute) {
        this.id = route.snapshot.params['collId'];
    }

}
