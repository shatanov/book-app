import { IFootnote } from "./footnote.inteface"

export interface IBook {
    id: number
    name: string
    decsription: string
    imgUrl: string
    rating: number
    footnotes: IFootnote[]
}