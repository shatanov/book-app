import { IBook } from "./book.interface"

export interface IBookCategories {
    id: number
    title: string
    books: IBook[]
}