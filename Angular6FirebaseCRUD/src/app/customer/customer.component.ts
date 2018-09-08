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
  showSuccessMessage: boolean;
  formControls = this.customerService.form.controls;

  ngOnInit() {
  }
  onSubmit() {
    this.submitted = true;
    if (this.custService.form.valid) {
      if (this.custService.form.get('$key').value == null) {
        this.custService.insertCustomer(this.custService.form.value);
      } else {
        this.custService.updateCustomer(this.custService.form.value);
      }
      this.showSuccessMessage = true;
      setTimeout(() => {
        this.showSuccessMessage = false;
      }, 3000);
      this.submitted = false;
      this.custService.form.reset();
    }
  }
}
