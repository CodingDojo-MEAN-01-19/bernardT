import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from './http-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  tasks = [];
  newTask: any;
  editTask: any;
  selectedTask;

  constructor(private _httpService: HttpServiceService) {}

  ngOnInit() {
    this.newTask = { title: '', description: '' };
  }

  // user picks one task without another request to the server
  choose(task) {
    this.selectedTask = task;
  }
  // user picks one and it uses the id to make a request to the server
  getOne(id) {
    const obs = this._httpService.getOne(id);
    obs.subscribe(res => {
      console.log('Got a response from get one', res);
      if (res['message'] === 'Success') {
        this.editTask = res['task'];
      } else {
        console.log('Error getting one task');
      }
    });
  }
  // get all the data
  getAll() {
    // make the variable 'observable' and assign it to whatever is returned by the getAll method in the service
    const observable = this._httpService.getAll();
    // subscribe to the observable
    observable.subscribe(res => {
      // check if the response has a message of "success"
      if (res['message'] === 'Success') {
        console.log('We got a success');
        // assign our property of tasks to the array in the response
        this.tasks = res['tasks'];
      } else {
        console.log('There was an error', res['error']);
      }
    });
  }

  onSubmitcreate(newTask) {
    const observable = this._httpService.addTask(this.newTask);
    observable.subscribe(data => {
      console.log('Got data from post back', data);
      this.newTask = { title: '', description: '' };
    });
  }

  onSubmitedit(editTask) {
    const observable = this._httpService.editTask(this.editTask);
    observable.subscribe(data => {
      this.editTask = null;
      this.getAll();
    });
  }

  removeTask(id) {
    const observable = this._httpService.removeTask(id);
    observable.subscribe(data => {
      this.getAll();
    });
  }
}
