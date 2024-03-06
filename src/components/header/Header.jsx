import React from 'react'
import { AppBar, Toolbar, Typography } from '@mui/material'

export const Header = () => {
  return (
    <>
      <AppBar position='sticky'>
        <Toolbar>
          <Typography variant="h5" component="h5" sx={{margin: 'auto'}}>
            Main page
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  )
}