interface PaginationMeta {
  total: number;
  previousPage: number | null;
  nextPage: number | null;
  totalPages: number;
  link: string;
}

interface PaginatedResult<T> {
  data: T[];
  meta: PaginationMeta;
}

const paginate = <T>(items: T[], page: number = 1, perPage: number = 20, links: string = ''): PaginatedResult<T> => {
  const offset = perPage * (page - 1);
  const totalPages = Math.ceil(items.length / perPage);
  const paginatedItems = items.slice(offset, perPage * page);

  return {
    data: paginatedItems,
    meta: {
      total: items.length,
      previousPage: page - 1 ? page - 1 : null,
      nextPage: (totalPages > page) ? page + 1 : null,
      totalPages: totalPages,
      link: links
    }
  };
};

export default paginate