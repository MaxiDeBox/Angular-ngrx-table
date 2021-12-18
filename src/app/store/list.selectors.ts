import { createSelector } from "@ngrx/store";
import { IAppStore } from "../models/store.model";
import { IListState } from "../models/list.model";

export const listSelector = (state: IAppStore) => state.list;

export const listStateItemsSelector = createSelector(
  listSelector,
  (state: IListState) => state.items
);
