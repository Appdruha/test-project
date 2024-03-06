import React from 'react'
import { Header } from '../../components/header/Header.jsx'
import { Footer } from '../../components/footer/Footer.jsx'
import { Box } from '@mui/material'

export const Layout = ({ children }) => {
  return (
    <Box sx={{ maxWidth: '1200px', margin: 'auto' }} bgcolor='#B9C4D0'>
      <Header />
      <Box component='main' flexGrow={1}>
        {children}
      </Box>
      <Footer />
    </Box>
  )
}