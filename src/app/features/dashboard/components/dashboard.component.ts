
import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../service/dashboard.service';
import { ITotal } from '../models/ITotal';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  total: ITotal;

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.dashboardService.getTotal().subscribe(response => {
      this.total = response.data;
    });
  }

}