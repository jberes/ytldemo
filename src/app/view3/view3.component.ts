import { Component, OnInit } from '@angular/core';
import { NorthwindCloudApp1Service } from '../services/northwind-cloud-app1.service';

@Component({
  selector: 'app-view3',
  templateUrl: './view3.component.html',
  styleUrls: ['./view3.component.scss']
})
export class View3Component implements OnInit {
  public northwindCloudApp1ApiCustomers: any = null;

  constructor(
    private northwindCloudApp1Service: NorthwindCloudApp1Service,
  ) {}

  ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.northwindCloudApp1Service.getApiCustomers().subscribe(data => this.northwindCloudApp1ApiCustomers = data);
  }
}
