import { createReducer, on } from "@ngrx/store";
import { ActionStatus } from "./status.actions";
import { IStatusState } from "../models/status.model";

export const initialState: IStatusState = {
  items: [
    { id: 1, label: "Назнечен" },
    { id: 2, label: "Выполняется" },
    { id: 3, label: "Выполнен" },
    { id: 4, label: "Отменен" },
    { id: 5, label: "Ошибка" },
    { id: 6, label: "Получен" },
    { id: 7, label: "Оформлен" }
  ]
};

const _statusReducer = createReducer(
  initialState,
  on(ActionStatus.addSatus, (state, { items }) => {
    return {
      ...state,
      items: [...initialState.items, ...items]
    };
  })
);

export function statusReducer(
  state: IStatusState,
  action: ActionStatus
): IStatusState {
  return _statusReducer(state, action);
}
