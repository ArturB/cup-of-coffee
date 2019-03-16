import { User } from '../models/user.model';
export class Article {
    constructor(public user: User,
                public link: string,
                public title: string,
                public category: string,
                // public author: string,
                public description: string,
                public likes: number,
                public dateModified: string,
                public articleId?: number) {}
}