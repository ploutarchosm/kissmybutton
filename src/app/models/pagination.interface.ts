import { IArticle } from "@app/models/article.interface";

export interface IPaginationViewModel {
  status: string;
  totalResults: number;
  articles: IArticle[]
}
