import { CityApiService } from 'src/app/services/city-api.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ICity } from 'src/app/Data/city.model';
import { AlertsService } from 'angular-alert-module';
import { NumberValidators } from 'src/app/shared/Validators/range-validator';
@Component({
  selector: 'app-city-edit',
  templateUrl: './city-edit.component.html',
  styleUrls: ['./city-edit.component.css'],
})
export class CityEditComponent {
  id: number = 0;
  title = 'Edit City Details';
  cityForm!: FormGroup;
  city!: ICity;

  constructor(
    private route: ActivatedRoute,
    private cityService: CityApiService,
    private alerts: AlertsService,
    private router : Router
  ) {}
  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.id = +params['id'];
      console.log(this.id);
    });

    this.cityService.getSingleCity(this.id).subscribe({
      next: (singleCity) => {
        this.city = singleCity;
        const date = new Date(this.city.doj);
        const formattedDate = `${date.getUTCFullYear()}-${(
          date.getUTCMonth() + 1
        )
          .toString()
          .padStart(2, '0')}-${date.getUTCDate().toString().padStart(2, '0')}`;
        this.city.doj = formattedDate as any as Date;
        this.initCityForm();
        this.cityForm.patchValue(this.city);
        console.log(this.city, 'This.city');
      },
      error: (err) => this.cityService.handleError(err),
      complete: () => console.log('Data Succesfully Recieved'),
    });
  }
  initCityForm() {
    this.cityForm = new FormGroup({
      name: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('^[A-Za-z]+$'),
        ])
      ),
      rating: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('^[0-9]+(\.[0-9])?$'),
          NumberValidators.range(1,5)
        ])
      ),
      doj: new FormControl('', Validators.required),
      cost: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('^[0-9]+$')
        ])
      ),
    });
  }

  formUpdated: boolean = false;
  onSubmit() {
    // this.formUpdated = true;
    if (this.cityForm.invalid) {
      this.alerts.setMessage('Form Submitted is Invalid', 'error');
    } else if (this.cityForm.valid) {
      var updatedCity = this.city;
      if (updatedCity) {
        updatedCity.name = this.cityForm.controls['name'].value;
        updatedCity.cost = this.cityForm.controls['cost'].value;
        updatedCity.rating = this.cityForm.controls['rating'].value;
        updatedCity.doj = this.cityForm.controls['doj'].value;

        console.log(updatedCity);
        this.cityService.updateCity(updatedCity).subscribe({
          next: (data) => console.log(data),
          complete: () => {
            console.log('Data Updated Succesfully');
            this.alerts.setMessage(
              'City Details Updated Successfully!',
              'success'
            );
            this.router.navigate(['/cities'])
          },
        });
      }
      console.log(
        `City ${updatedCity.name} is updated with updated price ${updatedCity.cost}, Rating :${updatedCity.rating},doj:${updatedCity.doj}`
      );
    }
  }

  onBack(){
    this.router.navigate(['/cities'])
  }
}
