import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Article } from '../../../../core/models/article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  article: Article;
  id: number;
  private sub: any;

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
      description: "ssss",
      category: "popularne",
      viewed: 12,
      dateModified: new Date()
    },
    {
      articleId: 4,
      link: "./assets/img/image4.jpg",
      title: "vmslvnj vmsjns",
      author: "Ford1201",
      description: "dddd",
      category: "popularne",
      viewed: 12,
      dateModified: new Date()
    },
    {
      articleId: 5,
      link: "./assets/img/image5.jpg",
      title: "vmslvnj vmsjn vsjnjso vfrfs ssvklms",
      author: "Admin",
      description: "ffff",
      category: "popularne",
      viewed: 12,
      dateModified: new Date()
    },
    ];
  
  isFavorite: boolean = false;
  constructor(private route: ActivatedRoute) { 

  }

  ngOnInit() {
    this.id = this.route.snapshot.params['articleId'];
    // this.article = this.articles.findIndex()
    // this.route.params.subscribe(data => {
    //   this.article =  data;
    // });
  }

  onFavorite() {
    console.log(this.isFavorite);
    this.isFavorite = !this.isFavorite;
    
  }

}
