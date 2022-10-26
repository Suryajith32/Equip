import { Stack } from '@mui/material'
import Sidebar from '../../components/Sidebar'
import React from 'react'
import Body from '../../components/Body/Body'
import Navbar from '../../components/navbar/Navbar'

function index() {
  return (
    <>
     <Navbar/>
    <Stack direction='row' > 
    <Sidebar/>
    <Body/>
  </Stack>
  </>
  )
}

export default index