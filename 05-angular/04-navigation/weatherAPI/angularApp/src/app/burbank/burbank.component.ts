//Must be a better way to handle API request from main component based on link clicked, then pass that data to the component.

import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service'
@Component({
  selector: 'app-burbank',
  templateUrl: './burbank.component.html',
  styleUrls: ['./burbank.component.css']
})
export class BurbankComponent implements OnInit {
  data;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    let weather = this._httpService.getWeather("burbank").subscribe(data=>{
      this.data=data
      console.log(data);
    });
  }

}