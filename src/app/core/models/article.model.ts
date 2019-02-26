export class Article {
    constructor(public articleId: number,
                public link: string,
                public title: string,
                public author: string,
                public description: string,
                public category: string,
                public viewed: number,
                public dateModified: Date,) {}
}