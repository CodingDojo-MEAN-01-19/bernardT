import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChicagoComponent } from './chicago/chicago.component'
import { SeattleComponent } from './seattle/seattle.component'
import { BurbankComponent } from './burbank/burbank.component';
import { DallasComponent } from './dallas/dallas.component';
import { DcComponent } from './dc/dc.component';
import { SanJoseComponent } from './san-jose/san-jose.component';

const routes: Routes = [
  { path: '', redirectTo: 'chicago', pathMatch: 'full'},
  { path: 'burbank', component: BurbankComponent },
  { path: 'chicago', component: ChicagoComponent },
  { path: 'dallas', component: DallasComponent },
  { path: 'dc', component: DcComponent },
  { path: 'sanjose', component: SanJoseComponent },
  { path: 'seattle', component: SeattleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }