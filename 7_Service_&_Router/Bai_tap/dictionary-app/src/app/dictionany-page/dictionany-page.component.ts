import { Component, OnInit } from '@angular/core';
import {Dictionary} from "../model/dictionary";
import {DictionaryServiceService} from "../service/dictionary-service.service";

@Component({
  selector: 'app-dictionany-page',
  templateUrl: './dictionany-page.component.html',
  styleUrls: ['./dictionany-page.component.css']
})
export class DictionanyPageComponent implements OnInit {
  dictionaries: Dictionary[];
  mean: string = '';

  constructor(
    private dictionaryService : DictionaryServiceService
  ) { }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
  this.dictionaries = this.dictionaryService.getAll();
}

  getMean(word: string) {
    this.mean = this.dictionaryService.translate(word);
  }
}
