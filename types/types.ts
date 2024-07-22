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

export interface IReview {
    id: string,
    name: string,
    rating: number,
    review: string,
}