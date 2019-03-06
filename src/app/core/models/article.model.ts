export class Article {
    constructor(public articleId: number,
                public link: string,
                public title: string,
                public category: string,
                public author: string,
                public description: string,
                public viewed: number,
                public dateModified: Date,) {}
}