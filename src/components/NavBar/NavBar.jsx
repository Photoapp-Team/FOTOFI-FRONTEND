import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Fotofilogo from '../../images/fotofi.png'
import './NavBar.css'
import SearchBar from '../SearchBar/Search';
import HeartIcon from '../HeartButton/Heart';
import ButtonToEdit from '../Button/Buttons';
import Heart from '../HeartButton/Heart';
import BellButton from '../BellButton/BellButton';

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
                    <Heart/>
                    <BellButton/>
                    <ButtonToEdit />
                </div>
            </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

{/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
</IconButton>

<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            FOTOFI
          </Typography> */}