import { IFootnote } from "./footnote.inteface"
import { IFeedback } from "./feedback.interface"
export interface IBook {
    id: number
    name: string
    decsription: string
    additional_description?: string
    imgUrl: string
    rating: number
    footnotes: IFootnote[]
    feedback?: IFeedback[]
}