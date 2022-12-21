import { IFootnote } from "./footnote.inteface"

export interface IBook {
    id: number
    name: string
    decsription: string
    additional_description?: string
    imgUrl: string
    rating: number
    footnotes: IFootnote[]
}