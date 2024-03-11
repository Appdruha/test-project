export const getUniqueIds = async ({ getIds, offset, limit, filterOptions }) => {
  let ids = []

  if (filterOptions) {
    {
      if (filterOptions.price !== 0) {
        ids = await getIds({
          action: 'filter',
          params: { price: Number(filterOptions.price) },
        }).unwrap()
      } else if (filterOptions.brand) {
        ids = await getIds({
          action: 'filter',
          params: { brand: filterOptions.brand },
        }).unwrap()
      } else {
        ids = await getIds({
          action: 'filter',
          params: { product: filterOptions.term },
        }).unwrap()
      }
    }
  } else {
    ids = await getIds({
      action: 'get_ids',
      params: { offset, limit },
    }).unwrap()
  }

  if (ids.length < limit) {
    return ids
  }

  const uniqueIds = new Set(ids)

  if (uniqueIds.size < limit) {
    const additionalIds = await getUniqueIds({
      getIds,
      offset: offset + limit,
      limit: limit - uniqueIds.size,
    })

    additionalIds.forEach(id => uniqueIds.add(id))
  }

  return uniqueIds
}