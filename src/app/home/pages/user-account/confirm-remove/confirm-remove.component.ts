import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { Article } from '../../../../core/models/article.model';
import { ArticleService } from '../../../../core/services/article.service';

@Component({
  selector: 'app-confirm-remove',
  templateUrl: './confirm-remove.component.html',
  styleUrls: ['./confirm-remove.component.css']
})
export class ConfirmRemoveComponent implements OnInit {

  @Input() article: Article;
  @Output() removeAnsw = new EventEmitter<boolean>();

  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    console.log('aa', this.article)
  }


  yesRemove() {
    this.removeAnsw.emit(true);
  }

  closeModal() {
    this.removeAnsw.emit(false);
  }

  ngOnDestroy() {

  }

}
