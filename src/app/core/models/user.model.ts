import { Article } from '../models/article.model';
export class User {
  constructor(
              public email: string,
              public password: string,
              public username?: string,
              public _id?: number,
              public ConfirmPassword?: string
              ) {}
}