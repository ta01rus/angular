import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ItemsComponent } from './items/items.component';
import { ItemComponent } from './item/item.component';


const appRoutes: Routes = [
  { path: 'items/:collId',   component: ItemsComponent ,
    children: [
      {path: '', component: ItemsComponent},
      {path: 'item/:ItemId', component: ItemComponent}
    ]}
];

@NgModule({
  imports: [CommonModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class RouteModule {

}
