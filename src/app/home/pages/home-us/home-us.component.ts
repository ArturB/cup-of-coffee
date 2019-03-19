import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-us',
  templateUrl: './home-us.component.html',
  styleUrls: ['./home-us.component.css']
})
export class HomeUsComponent implements OnInit {

  categories = ['popularne', 'sztuka', 'psychologia'];
  showFour: boolean = true;
  
  constructor() { }

  ngOnInit() {
  }

}
