import { User } from '../models/user.model';
export class Article {
    constructor(
                public link: string,
                public title: string,
                public category: string,
                public description: string,
                public likes: number,
                public dateModified: string,
                public user?: User,
                public articleId?: number) {}
}