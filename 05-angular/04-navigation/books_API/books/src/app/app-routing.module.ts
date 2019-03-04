import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { NgModel } from '@angular/forms';
import { environment } from '../environments/environment';

const enableTracing = true && !environment.production;
const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      enableTracing, // enable everything the router is doing
    }),
  ],
})
export class AppRoutingModule {}

// import this module in the app.module.ts
