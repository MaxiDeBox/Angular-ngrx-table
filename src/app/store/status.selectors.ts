import { createSelector } from "@ngrx/store";
import { IStatusState } from "../models/status.model";
import { IAppStore } from "../models/store.model";

export const statusSelector = (state: IAppStore) => state.status;

export const statusStateItemsSelector = createSelector(
  statusSelector,
  (state: IStatusState) => state.items
);

export const statusStateItemByIdSelector = createSelector(
  statusSelector,
  (state: IStatusState, id: number): string => {
    const item = state.items.find((item) => item.id === id);
    return item ? item.label : "";
  }
);
