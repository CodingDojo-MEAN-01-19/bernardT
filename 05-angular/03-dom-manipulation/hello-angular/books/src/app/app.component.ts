import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  tasks: any;
  task: any;
  NewTask: any;
  EditTask: any;
  ShowEditForm = false;
  constructor(private _httpService: HttpService) {}
  ngOnInit() {
    this.GetAllTasks();
    this.NewTask = { title: '', description: '' };
  }
  GetAllTasks() {
    this._httpService.GetAllTasks().subscribe(data => {
      console.log('Got our data!', data);
      this.tasks = data['data'];
      console.log('Got our tasks!', this.tasks);
    });
  }
  GetOneTask(id: String) {
    this._httpService.GetOneTask(id).subscribe(response => {
      console.log('Got our data!', response);
      this.task = response['data'];
    });
  }
  CreateTask() {
    this._httpService.CreateTask(this.NewTask).subscribe(response => {
      console.log('Got our data!', response);
      this.NewTask = { title: '', description: '' };
      this.GetAllTasks();
    });
  }
  DeleteTask(id: String) {
    this._httpService.DeleteTask(id).subscribe(data => {
      console.log('Task deleted', data);
      this.GetAllTasks();
    });
  }
  OnEdit(EditTask) {
    EditTask.ShowEditForm = false;
    console.log('Edit the task', EditTask._id);
    this._httpService.UpdateTask(EditTask).subscribe(data => {
      console.log('Got our data!', data);
    });
  }
  EditOnClick(task) {
    console.log('Task we need to edit', task, 'Task Title', task.title);
    task.ShowEditForm = true;
  }
}
