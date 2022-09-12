import {Injectable} from '@angular/core';
import {Dictionary} from "../model/dictionary";

@Injectable({
  providedIn: 'root'
})
export class DictionaryServiceService {

  dictionaries: Dictionary[] = [{
    word: 'hello',
    mean: 'xin chao'
  },
    {
      word: 'computer',
      mean: 'may tinh'
    },
    {
      word: 'image',
      mean: 'buc anh'
    },
    {
      word: 'cat',
      mean: 'con meo'
    },
    {
      word: 'lion',
      mean: 'su tu'

    }];

  constructor() {
  }

  getAll() {
    return this.dictionaries;
  }

  translate(word: string): string {
    const wordValue = this.dictionaries.find(item => item.word === word);
    return wordValue.mean;
  }
}
