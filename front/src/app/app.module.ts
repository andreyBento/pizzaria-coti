import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CreationCardComponent } from './components/creation-card/creation-card.component';
import { SelectFlavorComponent } from './components/select-flavor/select-flavor.component';
import { AddToDom } from './services/add-to-dom.service';


@NgModule({
  declarations: [
    AppComponent,
    CreationCardComponent,
    SelectFlavorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [AddToDom],
  bootstrap: [AppComponent],
  entryComponents: [SelectFlavorComponent]
})
export class AppModule { }
