import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICar } from '../model/car';
import { CarService } from '../share/car.service';

@Component({
  selector: 'app-cars-details',
  templateUrl: './cars-details.component.html',
  styleUrls: ['./cars-details.component.scss']
})
export class CarsDetailsComponent implements OnInit {

  cars: ICar[]; // Array<string>
  carcont: ICar;

  constructor(private ucs: CarService, private router: Router) {
  }


  ngOnInit() {
    console.log('car:init');
    this.cars = this.ucs.getall();
    console.log(this.cars);
  }
}
