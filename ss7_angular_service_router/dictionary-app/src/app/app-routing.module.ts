import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DictionaryPageComponent} from './dictionary-page/dictionary-page.component';
import {TranslateComponent} from './translate/translate.component';


const routes: Routes = [{
  path: 'dictionary',
  component: DictionaryPageComponent
}, {
  path: 'dictionary/translate/:word',
  component: TranslateComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
