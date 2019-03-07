import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service'

@Component({
  selector: 'app-dallas',
  templateUrl: './dallas.component.html',
  styleUrls: ['./dallas.component.css']
})
export class DallasComponent implements OnInit {
  data;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    let weather = this._httpService.getWeather("dallas").subscribe(data=>{
      this.data=data
      console.log(data);
    });
  }

}