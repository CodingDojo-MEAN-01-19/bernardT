# Assignments List

1. Restful Tasks Continued
.../app/app.component.ts

import { Component, OnInit } from '@angular/core';
// Implement OnInit.
export class AppComponent implements OnInit {
    constructor(private _httpService: HttpService){}
    // ngOnInit will run when the component is initialized, after the constructor method.
    ngOnInit(){
      this.getTasksFromService();
    }
    getTasksFromService(){
      this._httpService.getTasks();
    }
}

getTasksFromService(){
    let observable = this._httpService.getTasks();
    observable.subscribe(data => console.log("Got our tasks!", data));
}

export class AppComponent implements OnInit {
    // Set the attribute tasks to be an array.
    tasks = [];
    getTasksFromService(){
       let observable = this._httpService.getTasks();
       observable.subscribe(data => {
          console.log("Got our tasks!", data)
          // In this example, the array of tasks is assigned to the key 'tasks' in the data object. 
          // This may be different for you, depending on how you set up your Task API.
          this.tasks = data['tasks'];
       });
    }
}


------------------------
.../app/http.service.ts
getTasks(){
    // Remove the lines of code where we make the variable 'tempObservable' and subscribe to it.
    // tempObservable = this._http.get('/tasks');
    // tempObservable.subscribe(data => console.log("Got our tasks!", data));
    // Return the observable to wherever the getTasks method was invoked.
    return this._http.get('/tasks');
}










2. Restful Tasks Interactive
3. Ninja Gold (Group Activity -- Self Assigned)
4. Restful Tasks CRUD
5. Restful Tasks Nested
6. Rate My Cakes
