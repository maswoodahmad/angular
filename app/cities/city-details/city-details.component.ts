import { AlertsModule, AlertsService } from 'angular-alert-module';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICity } from 'src/app/Data/city.model';
import { CityApiService } from 'src/app/services/city-api.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-city-details',
  templateUrl: './city-details.component.html',
  styleUrls: ['./city-details.component.css'],
})
export class CityDetailsComponent {
  id: number = 0;
  subscription$!: Subscription;
  city!: ICity;
  constructor(
    private route: ActivatedRoute,
    private cityService: CityApiService,
    private router : Router,
    private alerts : AlertsService
  ) {}

  ngOnInit() {
    // Methos 1 using paramas
    // this.route.params.subscribe((params) => {
    //   this.id = +params['id'];
    //   console.log(this.id);
    // });

    // Method 2 using Snapshot
    let paramId = this.route.snapshot.paramMap.get('id');
    if (paramId) {
      this.id = Number(paramId);
      if (!isNaN(this.id)) {
        this.getCity();
      }
    }
  }

  getCity() {
    this.subscription$ = this.cityService.getSingleCity(this.id).subscribe({
      next: (data) => {
        this.city = data;
        console.log(this.city);
      },
      complete: () => console.log(`Data Recieved for id ${this.id}`),
    });
  }

  onBack(){
    this.router.navigate(['/cities'])
  }
  editCity(){
    this.router.navigate([`/cities/edit/${this.id}`])
  }
  deleteCity() {
    this.cityService.deleteCity(this.id).subscribe({
      next: (data) => {
        console.log(data);
       
      },
      complete: () => {
        console.log('Data Deleted Successfully');
        this.alerts.setMessage(
          `City with id ${this.id} deleted successfully `,
          'success'
        );
        this.onBack();
      },
    });
  }

  // Directives
  getClasses():string{
    return this.city?.cost>5000 ? 'higher' : 'regular'
  }
}
