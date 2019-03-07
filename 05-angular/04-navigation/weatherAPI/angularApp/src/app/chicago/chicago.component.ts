import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service'
@Component({
  selector: 'app-chicago',
  templateUrl: './chicago.component.html',
  styleUrls: ['./chicago.component.css']
})
export class ChicagoComponent implements OnInit {
  data;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    let weather = this._httpService.getWeather("chicago").subscribe(data=>{
      this.data=data
      console.log(data);
    });
  }

}