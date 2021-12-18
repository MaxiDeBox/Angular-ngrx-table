import { IStatusState } from "./status.model";
import { IListState } from "./list.model";

export interface IAppStore {
  status: IStatusState;
  list: IListState;
}
