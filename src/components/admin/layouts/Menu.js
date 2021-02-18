import React, {useContext} from 'react';
import { UserContext } from "../../../context/UserContext";
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

export default function SimpleListMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [user, setUser] = useContext(UserContext);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logOutUser = () => {
    // empty local storage
    setUser(null);
    localStorage.removeItem("budash");
  };


  return (
    <div style ={{marginLeft:'auto'}}>
    <span>{user.user.name}</span>
      <Button aria-controls="simple-menu" style={{color:'#fff'}} aria-haspopup="true" onClick={handleClick}>
        <AccountCircleIcon /> 
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
      <Link to={'/profile/me'} style={linkStyle}>
        <MenuItem onClick={handleClose}>Profile</MenuItem>
      </Link>
        <MenuItem onClick={logOutUser}>Logout</MenuItem>
      </Menu>
    </div>
  );
}

const linkStyle = {
  textDecoration : 'none',
  color: 'inherit'
}