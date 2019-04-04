import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

import { Article } from '../models/article.model';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) { }
    getArticlesObs(): Observable<Array<Article>> {
      return this.http.get<Array<Article>>('https://cupofcoffee.herokuapp.com/articles/');
  }

  getArticleObsByCategory(artCategory: string): Observable<Array<Article>> {
    const params = new HttpParams().set('category', artCategory);
    return this.http.get<Array<Article>>('https://cupofcoffee.herokuapp.com/articles/category/', {params: params});
  }

  getArticleObsById(_id: string): Observable<Article> {
    const token = localStorage.getItem('access_token')
      ? '?token=' + localStorage.getItem('access_token')
      : '';
    const params = new HttpParams().set('_id', _id);

    return this.http.get<Article>('https://cupofcoffee.herokuapp.com/articles/article' + token, {params: params});
  }

  addArticle(art: Article): Observable<Article> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');

    const token = localStorage.getItem('access_token')
      ? '?token=' + localStorage.getItem('access_token')
      : '';
    return this.http.post<Article>('https://cupofcoffee.herokuapp.com/articles/add-article' + token, art);
  }

  addLikeByUser(art: Article): Observable<Article> {
    // const headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');
    const token = localStorage.getItem('access_token')
      ? '?token=' + localStorage.getItem('access_token')
      : '';
    return this.http.post<Article>('https://cupofcoffee.herokuapp.com/articles/add-like' + token, art);
  }

  getFavorites(): Observable<Array<Article>> {
    const token = localStorage.getItem('access_token')
      ? '?token=' + localStorage.getItem('access_token')
      : '';
    return this.http.get<Array<Article>>('https://cupofcoffee.herokuapp.com/articles/favorites' + token);
  }

  getUserArticlesObs(): Observable<Array<Article>> {
    const token = localStorage.getItem('access_token')
      ? '?token=' + localStorage.getItem('access_token')
      : '';
    return this.http.get<Array<Article>>('https://cupofcoffee.herokuapp.com/articles/user-articles' + token);
  }

  editArticle(art: Article, _id: string): Observable<Article> {
    // const headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');

    const token = localStorage.getItem('access_token')
      ? '?token=' + localStorage.getItem('access_token')
      : '';

    const params = new HttpParams().set('_id', _id);

    return this.http.post<Article>('https://cupofcoffee.herokuapp.com/articles/edit-article' + token, art, {params: params});
  }

  deleteArticle(article: Article): Observable<Article> {
    const token = localStorage.getItem('access_token')
      ? '?token=' + localStorage.getItem('access_token')
      : '';
    const params = new HttpParams().set('_id', article._id.toString());
    return this.http.delete<Article>('https://cupofcoffee.herokuapp.com/articles/delete-article' + token, {params: params});
  }

zz
}
