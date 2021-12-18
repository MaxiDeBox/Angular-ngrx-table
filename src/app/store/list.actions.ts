import { createAction, props, union } from "@ngrx/store";
import { IListItem } from "../models/list.model";

export const ActionList = {
  addList: createAction("[LIST] ADD_LIST", props<{ items: IListItem[] }>())
};

const all = union(ActionList);
export type ActionList = typeof all;
