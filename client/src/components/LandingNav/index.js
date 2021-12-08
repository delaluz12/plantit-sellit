import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

function LandingNav() {

    const classes = useStyles();
    function showNavigation() {
      if (Auth.loggedIn()) { 
    return (
        <div className={classes.root}>
            <div className = "header ">
                <div className = "navigation pxy__30">
                <AppBar positon="static" color="transparent">
                    <Toolbar className="navbar d__flex">     
               
                    <Link to="/shop">
              Shop
            </Link>
            <Link to="/orderHistory">
              Order History
            </Link>
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
                    </Toolbar>
                </AppBar>
                </div>
            </div>
        </div>
    )
} else {
  return(
    <div className={classes.root}>
    <div className = "header ">
        <div className = "navigation pxy__30">
    <AppBar positon="static" color="transparent">
      <Toolbar className="navbar d__flex">
    <Link to="/shop">
              Shop
            </Link>
            <Link to="/signup">
            Signup
          </Link>
          <Link to="/login">
              Login
            </Link>
          </Toolbar>
          </AppBar>
          </div>
          </div>
          </div>
  )
}
}
return (

  <div className={classes.root}>
    <div className = "header ">
        <div className = "navigation pxy__30">
    <header>
      <AppBar positon="static" color="transparent">
        <Toolbar className="navbar d__flex">
        <Link to="/">
          {/* <span role="img" aria-label="shopping bag">🛍️</span> */}
          Plant It - Sell It
        </Link>

      <nav>
        {showNavigation()}
      </nav>
      </Toolbar>
      </AppBar>
    </header>
    </div>
    </div>
    </div>
  );
}

export default LandingNav
