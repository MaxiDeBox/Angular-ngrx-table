import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";

import { StoreModule } from "@ngrx/store";
import { statusReducer } from "./store/status.reducer";
import { listReducer } from "./store/list.reducer";
import { ItemStatusComponent } from './components/item-status/item-status.component';
import { SharedModule } from "./shared/shared.module";

@NgModule({
  declarations: [AppComponent, ItemStatusComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      status: statusReducer,
      list: listReducer
    }),
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
