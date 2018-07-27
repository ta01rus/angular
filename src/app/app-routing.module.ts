import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

 
const appRoutes: Routes = [
  //{ path: '',   redirectTo: '/about', pathMatch: 'full' }
 /* { path: 'crisis-center', component: CrisisListComponent },
  { path: 'heroes',        component: HeroListComponent },
  { path: '',   redirectTo: '/about', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent } */
];
 
@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}