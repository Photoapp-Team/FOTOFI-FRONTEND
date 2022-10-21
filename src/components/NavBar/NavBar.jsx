import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Fotofilogo from '../../images/fotofi.png'
import './NavBar.css'
import SearchBar from '../SearchBar/Search';
import Button from '../Button/Button'
import FavoriteIcon from '@mui/icons-material/Favorite';
import NotificationsIcon from '@mui/icons-material/Notifications';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{background: "#f5f5f5", opacity: 0.5}}>
        <Toolbar>
            <div className='headerContainer'>
                <div>
                    <a href='/'><img src={Fotofilogo} className="fotofiLogo"/></a>
                </div>
                <div>
                    <SearchBar/>
                </div>
                <div className='rightCornerNav'>
                    <Button 
                    variant="contained"
                    size="small"
                    name={<FavoriteIcon color="heart" />}
                    style={{border: "none"}}/>
                    <Button 
                    variant="contained"
                    size="small"
                    name={<NotificationsIcon color="tertiary" />}
                    style={{border: "none"}}/>
                    <Button 
                    variant="contained"
                    size="small"
                    name="Log In"
                    style={{border: "none"}}
                    />
                </div>
            </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

