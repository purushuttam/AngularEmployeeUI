import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/Employee.model';

@Component({
  selector: 'app-details-view',
  templateUrl: './details-view.component.html',
  styleUrls: ['./details-view.component.css']
})
export class DetailsViewComponent implements OnInit {

  employee: Employee[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
