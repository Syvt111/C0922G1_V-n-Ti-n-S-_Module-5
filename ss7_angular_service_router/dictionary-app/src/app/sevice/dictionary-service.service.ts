import {Injectable} from '@angular/core';
import {Iword} from '../model/iword';

@Injectable({
  providedIn: 'root'
})
export class DictionaryServiceService {
  words: Iword [] = [{
    word: 'red',
    mean: 'màu đỏ'
  }, {
    word: 'yellow',
    mean: 'màu vàng'
  }, {
    word: 'blue',
    mean: 'màu xanh'
  }, {
    word: 'black',
    mean: 'màu đen'
  }, {
    word: 'white',
    mean: 'màu trắng'
  }, {
    word: 'orange',
    mean: 'màu cam'
  }, {
    word: 'pink',
    mean: 'màu hồng'
  }, {
    word: 'brow',
    mean: 'màu nâu'
  }];

  constructor() {
  }

  getAll() {
    return this.words;
  }

  translate(word: string) {
    return this.words.find(item => item.word === word);
  }
}
