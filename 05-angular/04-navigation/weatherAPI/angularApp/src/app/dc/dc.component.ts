import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service'

@Component({
  selector: 'app-dc',
  templateUrl: './dc.component.html',
  styleUrls: ['./dc.component.css']
})
export class DcComponent implements OnInit {
  data
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    let weather = this._httpService.getWeather("washington")
      .subscribe(data=>{
        this.data = data
        console.log(data);
    });
  }

}