import { Card, CardContent, CardHeader, CardMedia, Typography } from '@mui/material'
import imagePlaceholder from '../../assets/images/imagePlaceholder.png'

export const ItemCard = ({product, price, id, brand, img}) => {
  return (
    <Card sx={{ width: '256px'}}>
      <CardContent>
        <Typography variant='h6' sx={{margin: 'auto', width: 'fit-content'}}>
          {product}
        </Typography>
      </CardContent>
      <CardMedia
        sx={{ height: '120px', width: '90%', margin: 'auto' }}
        image={img || imagePlaceholder}
        title="some image"
      />
      <CardContent>
        <Typography variant="body2" component="div">
          {brand}
        </Typography>
        <Typography variant="body2">
          {price}
        </Typography>
        <Typography variant="body2">
          {id}
        </Typography>
        <Typography variant="body2">
          {product}
        </Typography>
      </CardContent>
    </Card>
  )
}