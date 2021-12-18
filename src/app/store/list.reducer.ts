import { createReducer, on } from "@ngrx/store";
import { IListState } from "../models/list.model";
import { ActionList } from "./list.actions";

export const initialState: IListState = {
  items: [
    { id: 1, fio: "Иванов Иван Иванович", date: new Date(), statusId: 1 },
    { id: 2, fio: "Авдеев Авдей Авдеевич", date: new Date(), statusId: 2 },
    { id: 3, fio: "Архыз Ибн Аглы", date: new Date(), statusId: 3 },
    { id: 4, fio: "Киров Кирил Кирилович", date: new Date(), statusId: 4 },
    { id: 5, fio: "Хорошов Хорош Хорощович", date: new Date(), statusId: 5 }
  ]
};

const _listReducer = createReducer(
  initialState,
  on(ActionList.addList, (state, { items }) => {
    return {
      ...state,
      items: [...initialState.items, ...items]
    };
  })
);

export function listReducer(state: IListState, action: ActionList): IListState {
  return _listReducer(state, action);
}
