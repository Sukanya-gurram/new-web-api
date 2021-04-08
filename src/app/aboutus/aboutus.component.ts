import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {
  name: string="Sukanya";
  Salary: number=55000;
  rateofinterest= 0.25;
  today= new Date();
  v:number=20;
  constructor() { }

  ngOnInit(): void {
  }

}
