import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  searchForm = new FormGroup({
    name: new FormControl('', Validators.required),

  })
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    ;
  }

}
