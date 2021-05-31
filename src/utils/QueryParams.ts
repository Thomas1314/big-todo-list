type SortType = string | null;

type QueryParamsType = {
  _sort: SortType[];
  _order: SortType[];
  categoryId: string | string[] | null;
};

const QueryParams: QueryParamsType = {
  _sort: ['isFavorite', null, null],
  _order: ['desc', null, null],
  categoryId: null,
};

export default QueryParams;
