import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HttpServiceService {
  // give our service the module so that we can perform HTTP requests
  constructor(private _http: HttpClient) {
    console.log('Service is working');
  }
  // makes a request to the server on route /tasks
  getAll() {
    return this._http.get('/tasks');
  }
  // makes a request to the server on route /task/:id
  getOne(id) {
    return this._http.get('/tasks/' + id);
  }

  addTask(newTask) {
    return this._http.post('/tasks', newTask);
  }

  editTask(editTask) {
    return this._http.patch('tasks/' + editTask._id, editTask);
  }

  removeTask(id) {
    return this._http.delete('/tasks/' + id);
  }
}
