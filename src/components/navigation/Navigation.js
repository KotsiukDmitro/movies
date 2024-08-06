import React from 'react';
import { useState } from 'react';
import {
    Box,
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Button,
    Drawer,
    List,
    ListItemText,
    ListItem,
    ListItemButton,
    ListItemIcon,
    Hidden,
    Link
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SettingsIcon from '@mui/icons-material/Settings';
import { Link as RouterLink } from 'react-router-dom';


function Navigation() {

    const [isDrawerOpen, setDrawerOpen] = useState(false)

    const list = () => (
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={() => setDrawerOpen(false)}
            onKeyDown={() => setDrawerOpen(false)}
        >
            <List>
                <ListItem button>
                    <Link component={RouterLink} to={'settings'} >
                        <ListItemButton>
                            <ListItemIcon>
                                <SettingsIcon />
                            </ListItemIcon>
                            <ListItemText primary='Settings' />
                        </ListItemButton>
                    </Link>
                </ListItem>
            </List>


        </Box>
    );
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Hidden only={['lg' ,'xl']}>
                        <IconButton
                            onClick={() => setDrawerOpen(true)}
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Hidden>
                    <Link component={RouterLink} to={'/'}  sx={{ flexGrow: 1 }}>
                    <Typography variant="h6" component="div" sx={{color: 'white', flexGrow: 1 }}>
                        Movies recommendation
                    </Typography>
                    </Link>
                    <Box sx={{ display: { xs: 'none', lg: 'flex' } }}>
                            <Button component={RouterLink} to={'settings'} sx={{ my: 2, color: 'white', display: 'block' }}>
                                Settings
                            </Button>
                    </Box>
                </Toolbar>
            </AppBar>
            <Drawer
                anchor='left'
                open={isDrawerOpen}
                onClose={() => setDrawerOpen(false)}
            >
                {list()}
            </Drawer>
        </Box>
    );
}

export default Navigation;
