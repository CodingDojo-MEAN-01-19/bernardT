import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service'

@Component({
  selector: 'app-san-jose',
  templateUrl: './san-jose.component.html',
  styleUrls: ['./san-jose.component.css']
})
export class SanJoseComponent implements OnInit {
  data
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    let weather = this._httpService.getWeather("san jose").subscribe(data=>{
      this.data=data
      console.log(data);
    });
  }

}