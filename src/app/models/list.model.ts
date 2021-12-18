export interface IListItem {
  id: number;
  fio: string;
  date: Date;
  statusId: number;
}

export interface IListState {
  items: IListItem[];
}
