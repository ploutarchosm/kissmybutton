export enum ESortBy  {
  Relevancy ='relevancy',
  Popularity = 'popularity',
  PublishedAt = 'publishedAt'
}

export interface IRequestFilter {
  q?:string;
  from?: Date;
  to?: Date;
  sortBy?: ESortBy;
}

