export interface IBook {
    id: number,
    author: string,
    cover: string,
    description: string,
    publicationDate: string,
    title: string,
}

export interface BooksResponse {
    data: IBook[];
  }