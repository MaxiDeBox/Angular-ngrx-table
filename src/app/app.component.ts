import { Component, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { Observable } from "rxjs";
import { statusStateItemsSelector } from "./store/status.selectors";
import { IStatusItem } from "./models/status.model";
import { IListItem } from "./models/list.model";
import { listStateItemsSelector } from "./store/list.selectors";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  statusItems$: Observable<IStatusItem[]> = this.store$.pipe(
    select(statusStateItemsSelector)
  );

  listItems$: Observable<IListItem[]> = this.store$.pipe(
    select(listStateItemsSelector)
  );

  constructor(private store$: Store) {}

  ngOnInit() {}

  getStatusName(statusId: number, statuses: IStatusItem[]) {
    const status = statuses.find((item: IStatusItem) => item.id === statusId);
    console.log(status.label);
    return status.label;
  }
}
