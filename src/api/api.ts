import axios from 'axios';
import { TaskType } from '../components/TaskItem';
import {
  CategoryDataType,
  CategoryType,
  NewCategoryParamsType,
  newTaskParamsType,
  ParamsType,
  updateCategoryParamsType,
  UpdateCategoryParamsType,
  UpdateTaskType,
} from '../types/types';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'http://localhost:3000',
});
console.log(process.env);

const limit = process.env.REACT_APP_TASK_LIMIT;

export type Colors = 'yellowgreen' | 'yellow' | 'black' | '';
export type Icons = 'pets' | 'home' | 'nightlight_round' | '';

export const API = {
  getTasks: (Params: ParamsType) =>
    instance
      .get<Array<TaskType>>(
        `tasks?date_gte=${Params.dateFrom}&date_lte=${Params.dateTo}&${Params.searchString}&isDone=${Params.isListDone}&_start=0&_end=${Params.end}&_limit=${limit}`
      )
      .then((response) => response.data),

  deleteTask(id: number) {
    instance.delete(`/tasks/${id}`);
  },

  addTask: (newTaskParams: newTaskParamsType) =>
    instance.post<TaskType>('/tasks/', newTaskParams),

  updateTask: (updateTaskParams: UpdateTaskType) => {
    instance.patch<CategoryType>(`/tasks/${updateTaskParams.id}`, {
      title: updateTaskParams.title,
      isDone: updateTaskParams.isDone,
      isFavorite: updateTaskParams.isFavorite,
    });
  },

  updateCategoryText: (updateCategoryParams: updateCategoryParamsType) => {
    instance.patch<CategoryType>(`/categories/${updateCategoryParams.id}`, {
      name: updateCategoryParams.name,
    });
  },

  getCategories: () =>
    instance
      .get<Array<CategoryType>>('/categories')
      .then((response) => response.data),

  getDefaultCategory: () =>
    instance
      .get<CategoryDataType>('/defaultCategory')
      .then((response) => response.data.id),

  deleteCategory: (id: number) => instance.delete(`/categories/${id}`),

  updateCategory: ({ id, icon, color }: UpdateCategoryParamsType) => {
    instance.patch<CategoryType>(`/categories/${id}`, { icon, color });
  },

  updateDefaultCategory: (id: number | undefined) => {
    instance.put<CategoryType>('/defaultCategory', { id });
  },

  addCategory: (newCategoryParams: NewCategoryParamsType) =>
    instance.post<CategoryType>('/categories', newCategoryParams),
};
