import { User } from '../models/user.model';
export class Article {
    constructor(
                // public link: string,
                public artColors: Array<string>,
                //  = {tcolor: string, bcolor: string},
                public title: string,
                public category: string,
                public description: string,
                public likes: Array<User>,
                public dateModified: string,
                public author?: string,
                public user?: User,
                public _id?: string) {}
}