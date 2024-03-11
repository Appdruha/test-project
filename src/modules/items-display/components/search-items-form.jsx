import Paper from '@mui/material/Paper'
import InputBase from '@mui/material/InputBase'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import { InputLabel, Menu, MenuItem, Select, TextField } from '@mui/material'
import { useRef, useState } from 'react'
import { useSelector } from 'react-redux'

export const SearchItemsForm = ({ handleSubmitFilters }) => {
  const anchorRef = useRef(null)
  const [anchorEl, setAnchorEl] = useState(null)
  const isMenuOpen = Boolean(anchorEl)
  const { brands } = useSelector(state => state.itemsReducer)
  const [brand, setBrand] = useState('')
  const [price, setPrice] = useState(0)
  const [term, setTerm] = useState('')

  const handleMenuButtonClick = () => {
    setAnchorEl(anchorRef.current)
  }

  const handleCloseMenu = () => {
    setAnchorEl(null)
  }

  return (
    <Paper
      component='form'
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400, margin: '20px auto' }}
    >
      <IconButton sx={{ p: '10px' }} aria-label='menu' onClick={handleMenuButtonClick}>
        <MenuIcon ref={anchorRef} />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={isMenuOpen}
        onClose={handleCloseMenu}
      >
        <MenuItem>
          <Select
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            displayEmpty
            inputProps={{ 'aria-label': 'Without label' }}
            sx={{ width: '222px' }}
          >
            {brands.map(brand => <MenuItem value={brand} key={brand}>{brand}</MenuItem>)}
          </Select>
        </MenuItem>
        <MenuItem>
          <TextField value={price} type='number' placeholder='Цена' onChange={(e) => setPrice(e.target.value)} />
        </MenuItem>
      </Menu>
      <InputBase
        value={term}
        sx={{ ml: 1, flex: 1 }}
        placeholder='Искать'
        inputProps={{ 'aria-label': 'Искать' }}
        onChange={(e) => setTerm(e.target.value)}
      />
      <IconButton type='button' sx={{ p: '10px' }} aria-label='search'
                  onClick={() => handleSubmitFilters({ term, price, brand })}>
        <SearchIcon />
      </IconButton>
    </Paper>
  )
}