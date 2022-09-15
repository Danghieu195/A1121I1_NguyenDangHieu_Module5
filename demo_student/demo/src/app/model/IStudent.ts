import {ICategory} from "./ICategory";

export interface IStudent {
  avatar ?: string,
  id ?: string,
  name ?: string,
  address ?: string,
  phone ?: number,
  email ?: string,
  category ?: ICategory
}


