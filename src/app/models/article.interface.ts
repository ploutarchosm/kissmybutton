
interface IArticleSource {
  "id": string;
  "name": string;
}

export interface IArticle {
  "source": IArticleSource;
  "author": string;
  "title": string;
  "description": string;
  "url": string;
  "urlToImage": string;
  "publishedAt": Date;
  "content": string;
}
