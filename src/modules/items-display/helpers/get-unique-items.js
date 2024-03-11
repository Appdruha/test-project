import { getUniqueIds } from './get-unique-ids.js'

export const getUniqueItems = async ({ getItems, getIds, limit, offset, filterOptions }) => {
  const ids = [... await getUniqueIds({getIds, limit, offset, filterOptions})]

  return  getItems({
    action: 'get_items',
    params: { ids },
  }).unwrap()
}