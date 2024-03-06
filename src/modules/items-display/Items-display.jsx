import { ItemCard } from '../../components/item-card/Item-card.jsx'
import { Box, Button } from '@mui/material'
import { useGetIdsMutation } from './api/items-api.js'


export const ItemsDisplay = () => {

  const [getIds, {}] = useGetIdsMutation()

  const arr = () => {
    const items = []
    for (let i = 0; i < 50; i++) {
      items.push({ product: 'product' + i, price: 50 + i, id: '32252svdsg4', brand: 'any' })
    }
    return items
  }
  const click = () => {
    getIds({
      action: "get_ids",
      params: {offset: 10, limit: 3}
    })
  }

  const itemCards = arr().map(el => <ItemCard key={el.product} id={el.id} brand={el.brand} product={el.product} price={el.price} />)

  return (
    <>
      <Button variant='contained' onClick={() => click()}>Find</Button>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '24px', justifyContent: 'center' }}>
        {itemCards}
      </Box>
    </>
  )
}