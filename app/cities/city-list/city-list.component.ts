import { AlertsService } from 'angular-alert-module';
import { Component, OnInit } from '@angular/core';
import { City, ICity } from 'src/app/Data/city.model';
import { CityApiService } from 'src/app/services/city-api.service';
import { from } from 'rxjs';
@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.css'],
})
export class CityListComponent {
  title: string = 'List of Cities';
  cities: ICity[] = [];
  selectedCity: string | undefined;
  errMessage = '';
  constructor(
    public cityService: CityApiService,
    public alerts: AlertsService
  ) {}

  message: string = 'None';
  handleOnRatingClicked(event: string) {
    // alert(event);
    this.message = event;
  }

  getSelected(city: ICity) {
    this.selectedCity = city.name;
  }
  deleteCity(id: number) {
    this.cityService.deleteCity(id).subscribe({
      next: (data) => {
        console.log(data);
        this.cities = this.cities.filter((city) => city.id !== id);
      },
      complete: () => {
        console.log('Data Deleted Successfully');
        this.alerts.setMessage(
          `City with id ${id} deleted successfully `,
          'success'
        );
      },
    });
  }

  ngOnInit() {
    this.cityService.getCities().subscribe({
      next: (data) => (this.cities = data),
      error: (err) => this.cityService.handleError(err),
      complete: () => console.log('Data Received Successfully'),
    });
  }
  updateCity(city: ICity) {
    // this.cityService.updateCity()
  }


  
}
