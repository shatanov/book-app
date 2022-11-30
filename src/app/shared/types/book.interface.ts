import { BookFootnoteInterface } from '../modules/footnote/types/bookFootnote.interface';

export interface BookInterface{
  "name": string
  "decsription": string
  "imgUrl": string
  "footnotes": BookFootnoteInterface[]
}
