import { Component, OnInit } from '@angular/core';

import {CustomerService} from '../shared/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  constructor(private customerService: CustomerService) { }
  customerArray = [];
  showDeletMessage: boolean;

  ngOnInit() {
    this.customerService.getCustomers().subscribe(
      list => {
        this.customerArray = list.map(item => {
          return {
            $key: item.key,
            ...item.payload.val()
          };
        });
      });
  }

  onDelete($key) {
    if (confirm('Are you sure to delete this record?')) {
      this.customerService.deleteCustomer($key);
      this.showDeletMessage = true;
      setTimeout(() => {
        this.showDeletMessage = false;
      }, 3000);
    }
  }
}
