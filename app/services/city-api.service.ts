import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, Observable, throwError, filter, map, switchMap ,catchError} from 'rxjs';
import { ICity } from '../Data/city.model';

@Injectable({
  providedIn: 'root',
})
export class CityApiService {
  url: string = 'api/cities';
  constructor(private http: HttpClient) {}

  // get list of Cities
  getCities(): Observable<ICity[]> {
    return this.http
      .get<ICity[]>(this.url)
      .pipe(tap((data) => console.log(`Cities : ${JSON.stringify(data)}`)));
  }

  addCity(city: ICity) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http
      .post(this.url, city,{headers})
      .pipe(tap((data) => console.log(`Data is been added ${data}`)),catchError(this.handleError));
  }

  getSingleCity(id: number): Observable<ICity> {
    return this.http
    .get<ICity>(`${this.url}/${id}`)
    .pipe(tap((data) => console.log(`Cities : ${JSON.stringify(data)}`)),catchError(this.handleError));
  }

  // deleteCity(id: number): Observable<ICity> {
  //   return this.http.get<ICity[]>(this.url).pipe(
  //     switchMap((allCities) => {
  //       const cityToDelete = allCities.find((city) => city.id === id);
  //       if (!cityToDelete) {
  //         throw new Error('City Not Found');
  //       } else {
  //         return this.http
  //           .delete(`${this.url}/${id}`)
  //           .pipe(map(() => cityToDelete));
  //       }
  //     })
  //   );
  // }
  deleteCity(id : number){
    return this.http.delete(`${this.url}/${id}`).pipe(
      tap((data)=>console.log(data)),catchError(this.handleError)
    )
  }

  updateCity(updatedCity: ICity) {
    return this.http
      .put(`${this.url}/${updatedCity.id}`, updatedCity)
      .pipe(tap((data) => console.log(`Data is been added ${data}`)),catchError(this.handleError));
  }
   handleError(err: HttpErrorResponse): Observable<never> {
    let errorMessage = '';

    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.

      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.

      // The response body may contain clues as to what went wrong,

      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }

    console.error(errorMessage);

    return throwError(() => errorMessage);
  }
}
