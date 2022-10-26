import { Box, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'
import SidebarItems from './SidebarItems';

function index() {
    return (
        <Box position='fixed' sx={{ bgcolor: '#2196F3', width: '6%', height: '100vh' }}>
            {SidebarItems.map((item, index) => (
                <Box mt={2}>
                    <ListItemButton>
                        <ListItemIcon>
                            {item.icon}
                        </ListItemIcon>
                    </ListItemButton>
                </Box>
            ))}
        </Box>
    )
}

export default index