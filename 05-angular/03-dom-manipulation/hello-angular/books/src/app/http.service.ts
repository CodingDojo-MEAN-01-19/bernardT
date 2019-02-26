import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private _http: HttpClient) {}
  GetAllTasks() {
    return this._http.get('/tasks');
  }
  GetOneTask(id) {
    return this._http.get('/tasks/' + id);
  }
  CreateTask(newtask) {
    return this._http.post('/tasks', newtask);
  }
  DeleteTask(id) {
    return this._http.delete('/tasks/' + id);
  }
  UpdateTask(EditTask) {
    return this._http.patch('tasks/' + EditTask._id, EditTask);
  }
}
