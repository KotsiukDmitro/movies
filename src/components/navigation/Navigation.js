
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
    Hidden
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SettingsIcon from '@mui/icons-material/Settings';
import { Link } from 'react-router-dom';


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
                    <Link to={'settings'} >
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
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Link to={'/'}>Movies recommendation</Link>
                    </Typography>
                    <Box sx={{ display: { xs: 'none', lg: 'flex' } }}>
                        <Link to={'settings'} >
                            <Button sx={{ my: 2, color: 'white', display: 'block' }}>
                                Settings
                            </Button>
                        </Link>
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
