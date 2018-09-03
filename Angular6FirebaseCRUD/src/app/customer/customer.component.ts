import { Component, OnInit } from '@angular/core';
import {CustomerService} from '../shared/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  custService: CustomerService;
  constructor(private customerService: CustomerService) {
    this.custService = customerService;
  }
  submitted: boolean;
  formControls = this.customerService.form.controls;

  ngOnInit() {
  }
  onSubmit() {
    this.submitted = true;
    if (this.custService.form.valid) {

      this.submitted = false;
    }
    // if (this.custService.form.get('$key').value == null) {

    // }
  }
}
