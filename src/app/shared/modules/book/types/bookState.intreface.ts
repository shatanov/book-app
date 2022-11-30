import { GetBookResponseInterface } from './getBookResponse.interface';

export interface BookStateIntreface {
  isLoading: boolean
  errors: string | null
  data: GetBookResponseInterface | null
}
