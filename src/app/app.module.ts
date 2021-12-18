import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";

import { StoreModule } from "@ngrx/store";
import { statusReducer } from "./store/status.reducer";
import { listReducer } from "./store/list.reducer";
import { ItemStatusComponent } from './components/item-status/item-status.component';

@NgModule({
  declarations: [AppComponent, ItemStatusComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      status: statusReducer,
      list: listReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
