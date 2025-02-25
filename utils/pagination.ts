function getNextPage(
  {
    currentPage,
    perPage,
    totalPostCount
  }: {
    currentPage: number,
    perPage: number,
    totalPostCount: number
  }
): number | null {
  const lastPage = Math.ceil(totalPostCount / perPage)

  if (currentPage >= lastPage) {
    return null
  } else {
    return currentPage + 1
  }
}

function getPreviousPage(
  {
    currentPage
  }: {
    currentPage: number
}): number | null {
  if (currentPage <= 1) {
    return null
  } else {
    const pageNumber = currentPage - 1
    return pageNumber
  }
}

export { getNextPage, getPreviousPage }
