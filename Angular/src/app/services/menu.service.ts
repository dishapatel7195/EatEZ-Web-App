import { Menu } from './../models/menu';
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest ,HttpErrorResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { productsUrl } from 'src/app/config/api';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  
  hostUrl:string = '/';

  constructor(private router: Router,
    private http: HttpClient) {

  }

  //for restaurantOwner.
  retrieveMenuDetails(id: string): Observable<Menu[]> {
   // return this.http.get<Menu[]>(`http://localhost:8080/app/restaurantMenu/${id}`)
   return this.http.get<Menu[]>(this.hostUrl + 'app/restaurantMenu/' +id)
      .pipe(
        catchError((err) => {
          console.log('error caught in service')
          console.error(err);
 
          //Handle the error here
          this.router.navigate(['/', 'restaurantOwnerLogin']);
          return throwError(err);    //Rethrow it back to component
        })
      )
  }
  
  retrieveMenuDetailForUser(id: string): Observable<Menu[]> {
    //return this.http.get<Menu[]>(`http://localhost:8080/app/restaurantMenuForUser/${id}`);
    return this.http.get<Menu[]>(this.hostUrl + 'app/restaurantMenuForUser' +id);
}

  add(menuItem: Menu) {
    //return this.http.post('http://127.0.0.1:8080/app/addRestaurantMenuItem', menuItem)
    return this.http.post(this.hostUrl + 'app/addRestaurantMenuItem',menuItem)
      .pipe(
        catchError(this.handleError)
      );
  }

  delete(menuItem: Menu) {
    ///app/restaurantMenuItem/:itemId'
    console.log('deleteing id ', menuItem._id);
   // return this.http.delete(`http://127.0.0.1:8080/app/restaurantMenuItem/${menuItem._id}`)
   return this.http.delete(this.hostUrl + 'app/restaurantMenuItem/' + menuItem._id)
    .pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    console.error(error.message);
    return throwError('A data error occurred, please try again.');
  }

  getProducts(): Observable<Menu[]> {
    return this.http.get<Menu[]>(productsUrl);
  }
}