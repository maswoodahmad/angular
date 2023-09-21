import { AlertsService } from 'angular-alert-module';
import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormControlDirective,
  NgForm,
  NgModel,
  ValidationErrors,
} from '@angular/forms';
import { City, ICity } from 'src/app/Data/city.model';
import { CityApiService } from 'src/app/services/city-api.service';

@Component({
  selector: 'app-city-add',
  templateUrl: './city-add.component.html',
  styleUrls: ['./city-add.component.css'],
})
export class CityAddComponent {
  constructor(private cityService: CityApiService, private alerts : AlertsService) {}
  states = [
    'Karnataka',
    'Maharastra',
    'Tamil Nadu',
    'Himachal Pradesh',
    'Rajasthan',
    'Kerala',
  ];
  newCity: ICity = {
    id: 0,
    name: '',
    lat: 0,
    lon: 0,
    rating: 0,
    doj: new Date(),
    cost: 0,
  }; // !---->Definitive Assertion

  onSubmit() {
    console.log(`New City Added ${this.newCity.name}`);
  }
  get cityJSON() {
    return JSON.stringify(this.newCity);
  }

  // Method to generate Validation Messages and pass it to template.
  // this method should recieve the validation status from the inpuut element

  getMessage(errs: ValidationErrors | null, name: string): string[] {
    let messages: string[] = [];
    for (let errorName in errs) {
      switch (errorName) {
        case 'required':
          messages.push(`You must enter a ${name}`);
          break;
        case 'minlength':
          messages.push(
            `A ${name} must be atleast ${errs['minlength'].requiredLength} characters`
          );
          break;
        case 'pattern':
          messages.push(`Must Follow the Pattern for ${name}`);
          break;

        case 'range':
          messages.push(``);
          break;
      }
    }
    return messages;
  }

  getValidationMessages(state: NgModel, thingName?: string) {
    let thing: string = state.path?.[0] ?? thingName;
    return this.getMessage(state.errors, thing);
  }

  // Validating the entire form and the displaying summary of error messages
  formSubmitted: boolean = false;
  submitForm(form: NgForm) {
    this.formSubmitted = true;
    if (form.valid) {
      this.cityService.addCity(this.newCity).subscribe({
        next: (data) => console.log(data),
        complete: () => {console.log('Data added Successfully'),this.alerts.setMessage("New City Added Successfully",'success')},
      });

      // let cityObject = new City();
      // cityObject.addCity(this.newCity);
      // console.log(JSON.stringify(cityObject.list));
      form.resetForm();
      this.formSubmitted = false;
    }
  }

  getFormValidatedMessages(form: NgForm): string[] {
    let messages: string[] = [];
    Object.keys(form.controls).forEach((k) => {
      const control = form.controls[k] as any as NgModel;
      this.getValidationMessages(control).forEach((m) => messages.push(m));
    });
    return messages;
  }
}
