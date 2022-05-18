import { NgModule } from '@angular/core';
import { RouterModule, Routes, UrlSegment } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { MainRightDetailsComponent } from './components/main-right/main-right/main-right-details/main-right-details.component';
import { MainRightDynamicContainerComponent } from './components/main-right/main-right/main-right-dynamic-container/main-right-dynamic-container.component';
import { ModalComponent } from './components/modal/modal.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

const routes: Routes = [

  {path:'home', children:[
    {path:'', component:HomepageComponent, outlet:'main_outlet'},
    {path:'', component:MainRightDynamicContainerComponent, outlet:"main_right_outlet"},
    {path:'', component:MainRightDetailsComponent, outlet:'details'}
  ]},
  {path:'', redirectTo:'home',pathMatch:'full'},
  {path:'**',component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
