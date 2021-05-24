import { Injectable } from '@angular/core';
import { ICar } from '../model/car';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  cars: ICar[] = [{
    id: 1,
    marque: 'Alex',
    immatriculation: 'Alex',
    sieges: 'BlaBla',
    couleur: 'alex.blabla@aol.at'
  }];

  create(car: ICar) {
    const itemIndex = this.cars.length;
    car.id = this.getnextId();
    console.log(car);
    this.cars[itemIndex] = car;
  }

  delete(car: ICar) {
    this.cars.splice(this.cars.indexOf(car), 1);
  }

  update(car: ICar) {
    const itemIndex = this.cars.findIndex(item => item.id === car.id);
    console.log(itemIndex);
    this.cars[itemIndex] = car;
  }

  getall(): ICar[] {
    console.log('carservice:getall');
    console.log(this.cars);
    return this.cars;
  }

  reordercars(car: ICar) {
    console.log('Zur Info:', car);
    this.cars = this.cars
      .map(uc => uc.id === car.id ? car : uc)
      .sort((a, uc) => uc.id - uc.id);
  }

  getCarById(id: number) {
    console.log(id);
    const itemIndex = this.cars.findIndex(item => item.id === id);
    console.log(itemIndex);
    return this.cars[itemIndex];
  }

  getnextId(): number {
    let highest = 0;
    this.cars.forEach(function (item) {
      if (highest === 0) {
        highest = item.id;
      }
      if (highest < item.id) {
        highest = item.id;
      }
    });
    return highest + 1;
  }
}
