import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collapsed-category',
  templateUrl: './collapsed-category.component.html',
  styleUrls: ['./collapsed-category.component.css']
})
export class CollapsedCategoryComponent implements OnInit {

  categoryName: string = 'Popularne';

  constructor() { }


  ngOnInit() {
  }

}
