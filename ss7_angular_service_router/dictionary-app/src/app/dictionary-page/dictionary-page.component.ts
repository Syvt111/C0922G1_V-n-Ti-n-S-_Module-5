import {Component, OnInit} from '@angular/core';
import {Iword} from '../model/iword';
import {DictionaryServiceService} from '../sevice/dictionary-service.service';


@Component({
  selector: 'app-dictionary-page',
  templateUrl: './dictionary-page.component.html',
  styleUrls: ['./dictionary-page.component.css']
})
export class DictionaryPageComponent implements OnInit {
  words: Iword[] = [];
  check: boolean;

  constructor(private dictionaryService: DictionaryServiceService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  private getAll() {
    this.words = this.dictionaryService.getAll();
  }

  translate() {
    this.check = true;

  }
}
