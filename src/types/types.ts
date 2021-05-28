import { Colors, Icons } from '../api/api';

export type CategoryTitleType = string | string[] | null | undefined;

export type CategoryType = {
  icon: Icons;
  name: string;
  color: Colors;
  id: number;
  isEdit: boolean;
};

export type ParamsType = {
  isListDone?: boolean;
  end?: number;
  searchString: string;
  dateFrom: number | null;
  dateTo: number | null;
};

export type UpdateDoneType = {
  isListDone: boolean;
  id: number;
  isDone: boolean;
};

export type UpdateTaskParamsType = {
  title: string;
  id: number;
};

export type UpdateTaskType = {
  title: string;
  id: number;
  isDone: boolean;
  isFavorite: boolean;
  isListDone: boolean;
};

export type updateCategoryParamsType = {
  name: string;
  id: number;
};

export type UpdateCategoryParamsType = {
  icon: Icons;
  color: Colors;
  id: number | null;
};

export type UpdateFavoriteParamsType = {
  isFavorite: boolean;
  id: number;
};

export type newTaskParamsType = {
  title: string;
  isDone: boolean;
  isEdit: boolean;
  categoryId: number | null;
  date: number;
  isFavorite: boolean;
};

export type NewCategoryParamsType = {
  name: string;
  color: Colors;
  icon: Icons;
};

export type CategoryDataType = {
  id: number;
};
