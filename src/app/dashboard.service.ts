import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }

  post(data) {

    this.http.post('http://localhost:8080/dashboard/dashboard-products', data).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    )
    console.log(data);
  }

  delete(id) {

    this.http.post('http://localhost:8080/dashboard/dashboard-products', id).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    )
  }
}
