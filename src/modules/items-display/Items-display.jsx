import { ItemCard } from '../../components/item-card/Item-card.jsx'
import { Box, Button, Typography } from '@mui/material'
import { useGetBrandsMutation, useGetIdsMutation, useGetItemsMutation } from './api/items-api.js'
import { getUniqueItems } from './helpers/get-unique-items.js'
import { useEffect, useRef, useState } from 'react'
import { SearchItemsForm } from './components/search-items-form.jsx'

export const ItemsDisplay = () => {
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(50)
  const [getIds, getIdsState] = useGetIdsMutation()
  const [getItems, getItemsState] = useGetItemsMutation()
  const [getBrands, getBrandsState] = useGetBrandsMutation()
  const prevBtn = useRef(null)
  const nextBtn = useRef(null)

  const onClick = async (event) => {
    if (event.currentTarget === nextBtn.current) {
      await getUniqueItems({ getItems, getIds, offset: page * limit, limit })
      setPage(page + 1)
    } else if (event.currentTarget === prevBtn.current) {
      await getUniqueItems({ getItems, getIds, offset: page * limit - limit * 2, limit })
      setPage(page - 1)
    }
  }

  const handleSubmitFilters = async ({ term, brand, price }) => {
    await getUniqueItems({ getItems, getIds, offset: 0, limit, filterOptions: { term, brand, price } })
    setPage(1)
  }

  useEffect(() => {
    getUniqueItems({ getItems, getIds, offset: 0, limit })
    getBrands({
      action: 'get_fields',
      params: { field: 'brand' },
    })
  }, [])

  return (
    <Box sx={{ position: 'relative', minHeight: '100vh' }}>
      <SearchItemsForm handleSubmitFilters={handleSubmitFilters} />
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '24px', justifyContent: 'center', pb: '80px' }}>
        {getItemsState.data && getItemsState.data.map(item => <ItemCard price={item.price} product={item.product}
                                                                        id={item.id} brand={item.brand}
                                                                        key={item.id} />)}
      </Box>
      <Box sx={{
        display: 'grid',
        gridTemplateAreas: `"prev page next"`,
        gridTemplateColumns: '5fr 1fr 5fr',
        position: 'absolute',
        width: '100%',
        bottom: '20px',
      }}>
        {page > 1 &&
          <Button ref={prevBtn} sx={{ placeSelf: 'end', width: 'fit-content', gridArea: 'prev' }} variant='contained'
                  onClick={(event) => onClick(event)}>Назад</Button>}
        <Typography variant='h6' component='div' sx={{ placeSelf: 'center', gridArea: 'page' }}>{page}</Typography>
        <Button ref={nextBtn} sx={{ placeSelf: 'start', width: 'fit-content', gridArea: 'next' }} variant='contained'
                onClick={(event) => onClick(event)}>Вперед</Button>
      </Box>
    </Box>
  )
}