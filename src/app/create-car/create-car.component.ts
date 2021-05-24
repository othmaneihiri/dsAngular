import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ICar } from '../model/car';

import { CarService } from '../share/car.service';


@Component({
  selector: 'app-create-car',
  templateUrl: './create-car.component.html',
  styleUrls: ['./create-car.component.scss']
})
export class CreateCarComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private carService: CarService) { }
  addForm: FormGroup;
  @Output()
  createCar = new EventEmitter<ICar>();


  ngOnInit() {
  this.addForm = this.formBuilder.group({
    marque: ['', [Validators.required]],
    immatriculation: ['', [Validators.required]],
    sieges: ['', Validators.required],
    couleur: ['', Validators.required]
    });
  }

  isInvalid(name: string) {
    const control = this.addForm.get(name);
    return control.invalid && control.dirty;
  }

  

  onSubmit() {
    this.carService.create(this.addForm.value);

    this.router.navigate(['']);
  }
  onCancel(){
    
  }

}
