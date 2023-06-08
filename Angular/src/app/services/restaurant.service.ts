import { Injectable } from '@angular/core';
import { Restaurant } from "src/app/models/restaurant";

import { HttpClient, HttpRequest , HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  hostUrl:string = '/';
  path:string = 'app/restaurantList';

  constructor(private http: HttpClient) {
  }
  
  retrieveAllRestaurantLists() {
       // return this.http.get<Restaurant[]>('http://127.0.0.1:8080/app/restaurantList')
       return this.http.get<Restaurant[]>(this.hostUrl + this.path)
        .pipe(
         map((response: Restaurant[]) => {
         return response;
      }),
      catchError(this.handleError)
    );
}

retrieveRestaurantDetails(id: Number){
  return this.http.get<Restaurant>(`http://127.0.0.1:8080/app/restaurantList/${id}`)
        .pipe(
         map((response: Restaurant) => {
         return response;
      }),
      catchError(this.handleError)
    );
}
retrieveRestaurant(id : string) {
  return this.http.get<Restaurant>('http://127.0.0.1:8080/app/restaurantList/'+id)
  .pipe(
    map((response : Restaurant) => {
      return response;
    })
  )
}

private handleError(error: HttpErrorResponse) {
  console.error(error.message);
  return throwError('A data error occurred, please try again.');
}

}

