import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  ngOnInit(){}

  players = [{
    name : "LeBron James",
    years: 39
   },
   {
    name : "Anthony Davis",
    years: 33
   },
   {
    name : "Stephen Curry",
    years: 31
   },
   {
    name : "Bam Adebayo",
    years: 36
   },
   {
    name : "Jrue Holiday",
    years: 28
   },
   {
    name : "Jayson Tatum",
    years: 25
   },
   {
    name : "Derrick White",
    years: 26
   },
   {
    name : "Kevin Durant",
    years: 37
   }
  ];

  date = new Date();
}