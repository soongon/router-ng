import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {OneComponent} from './one/one.component';
import {TwoComponent} from './two/two.component';
import {ThreeComponent} from './three/three.component';
import {FourComponent} from './four/four.component';


const routes: Routes = [
  {path: '', redirectTo: 'one', pathMatch: 'full'},
  {
    path: 'one',
    component: OneComponent,
    // children: [
    //   {'one-1', FiveComponent},
    //   {},
    //   {}
    // ]
  },
  {path: 'four/:userId', component: FourComponent},
  {path: 'two', component: TwoComponent},
  {path: 'three', component: ThreeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
