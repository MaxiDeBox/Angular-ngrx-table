import { createAction, props, union } from "@ngrx/store";
import { IStatusItem } from "../models/status.model";

export const ActionStatus = {
  addSatus: createAction(
    "[STATUS] ADD_STATUS",
    props<{ items: IStatusItem[] }>()
  )
};

const all = union(ActionStatus);
export type ActionStatus = typeof all;
