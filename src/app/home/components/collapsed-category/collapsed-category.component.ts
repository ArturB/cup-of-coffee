import { Component, OnInit } from '@angular/core';
import { Article } from '../../../core/models/article.model';

@Component({
  selector: 'app-collapsed-category',
  templateUrl: './collapsed-category.component.html',
  styleUrls: ['./collapsed-category.component.css']
})
export class CollapsedCategoryComponent implements OnInit {

  // private videos: Article[] = [];
  public articles: Array<Article> = [
    {
      articleId: 1,
      link: "./assets/img/image1.jpg",
      title: "chhhhhhhd sefsgvr vsjnjso vfrfs ssvklms",
      author: "Admin",
      description: "aaaa",
      category: "popularne",
      viewed: 12,
      dateModified: new Date()
    },
    {
      articleId: 2,
      link: "./assets/img/image2.jpg",
      title: "vmslvnjjnjso vfrfs ssvklms",
      author: "Lollypop",
      description: "aaaa",
      category: "popularne",
      viewed: 12,
      dateModified: new Date()
    },
    {
      articleId: 3,
      link: "./assets/img/image3.jpg",
      title: "vmsgdrgd sffsnnrjvrn so vfrfs ssvklms",
      author: "Agent007",
      description: "aaaa",
      category: "popularne",
      viewed: 12,
      dateModified: new Date()
    },
    {
      articleId: 4,
      link: "./assets/img/image4.jpg",
      title: "vmslvnj vmsjns",
      author: "Ford1201",
      description: "aaaa",
      category: "popularne",
      viewed: 12,
      dateModified: new Date()
    },
    {
      articleId: 5,
      link: "./assets/img/image5.jpg",
      title: "vmslvnj vmsjn vsjnjso vfrfs ssvklms",
      author: "Admin",
      description: "aaaa",
      category: "popularne",
      viewed: 12,
      dateModified: new Date()
    },
    ];

  categoryName: string = 'Popularne';

  constructor() { }


  ngOnInit() {
  }

}
