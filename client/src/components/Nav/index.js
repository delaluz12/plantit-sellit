import React, {useState, useEffect} from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Auth from "../../utils/auth";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@material-ui/core";
// import auth from "../../utils/auth";
import EcoOutlinedIcon from '@material-ui/icons/EcoOutlined';

const withouNavRoutes = ["/seller", "/dashboard"];

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

function Nav() {
  const classes = useStyles();
  const { pathname } = useLocation();
  
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <div className={classes.root}>
<div className="header ">
  <div className="navigation ">
    
      <Toolbar className="navbar nav__items d__flex">
        <Link to="/shop" edge="end" className="nav__items px__30" >Shop</Link>
        <Link to="/orderHistory" edge="end" className="nav__items px__30" >Order History</Link>
        {Auth.isSeller() === true ? (
            
              <Link to="/seller/home" className="nav__items px__30">Dashboard</Link>
    
          ) : null}
        <a href="/" onClick={() => Auth.logout()}>
          Logout
        </a>
      </Toolbar>
  </div>
</div>
</div>
);
} else {
return (
<div className={classes.root}>
<div className="header ">
  <div className="navigation">

      <Toolbar className="navbar  nav__items d__flex">
        <Link to="/shop" edge="end" className="nav__items px__30" >Shop</Link>
        <Link to="/signup" edge="end" className="nav__items px__30" >Signup</Link>
        <Link to="/login" edge="end" className="nav__items px__30" >Login</Link>
      </Toolbar>
  </div>
</div>
</div>
      );
    }
  }
  if (withouNavRoutes.some((item) => pathname.includes(item))) return null;
  return (
    <AppBar position="static" color="transparent" className="navbar" >
      
    <header className="flex-row px-1">
      <div className="home__icon">
        <Link to="/" className="nav__items">
          {/* <span role="img" aria-label="shopping bag">🛍️</span> */}
        <EcoOutlinedIcon/> Plant it- Sell it
        </Link>
      </div>

      <nav>{showNavigation()}</nav>
    </header>
    </AppBar>
  );
}

export default Nav;

// import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
// import Auth from "../../utils/auth";
// import { Link } from "react-router-dom";
// import { Button } from "@material-ui/core";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   title: {
//     flexGrow: 1,
//   },
// }));

// function LandingNav() {
//   const classes = useStyles();
//   function showNavigation() {
//     if (Auth.loggedIn()) {
//       return (
//         <div className={classes.root}>
//           <div className="header ">
//             <div className="navigation pxy__30">
//               <AppBar positon="static" color="transparent">
//                 <Toolbar className="navbar d__flex">
//                   <Link to="/shop" edge="end" className="nav__items px__30" >Shop</Link>
//                   <Link to="/orderHistory" edge="end" className="nav__items px__30" >Order History</Link>
//                   <a href="/" onClick={() => Auth.logout()}>
//                     Logout
//                   </a>
//                 </Toolbar>
//               </AppBar>
//             </div>
//           </div>
//         </div>
//       );
//     } else {
//       return (
//         <div className={classes.root}>
//           <div className="header ">
//             <div className="navigation">
//               <AppBar positon="static" color="transparent">
//                 <Toolbar className="navbar d__flex">
//                   <Link to="/shop" edge="end" className="nav__items px__30" >Shop</Link>
//                   <Link to="/signup" edge="end" className="nav__items px__30" >Signup</Link>
//                   <Link to="/login" edge="end" className="nav__items px__30" >Login</Link>
//                 </Toolbar>
//               </AppBar>
//             </div>
//           </div>
//         </div>
//       );
//     }
//   }
//   return (
//     <div className={classes.root}>
//       <div className="header ">
//         <div className="navigation pxy__30">
//           <header>
//             <AppBar positon="static" color="transparent">
//               <Toolbar className="d__flex">
//                 <Link to="/" edge="end">
//                   Plant It - Sell It
//                 </Link>

//                 <nav>{showNavigation()}</nav>
//               </Toolbar>
//             </AppBar>
//           </header>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default LandingNav;

//PART 1
{/* <div className={classes.root}>
<div className="header ">
  <div className="navigation pxy__30">
    <AppBar position="static" color="primary">
      <Toolbar className="navbar d__flex">
        <Link to="/shop" edge="end" className="nav__items px__30" >Shop</Link>
        <Link to="/orderHistory" edge="end" className="nav__items px__30" >Order History</Link>
        <a href="/" onClick={() => Auth.logout()}>
          Logout
        </a>
      </Toolbar>
    </AppBar>
  </div>
</div>
</div>
);
} else {
return (
<div className={classes.root}>
<div className="header ">
  <div className="navigation">

      <Toolbar disableGutters="true" className="navbar d__flex">
        <Link to="/shop" edge="end" className="nav__items px__30" >Shop</Link>
        <Link to="/signup" edge="end" className="nav__items px__30" >Signup</Link>
        <Link to="/login" edge="end" className="nav__items px__30" >Login</Link>
      </Toolbar>

  </div>
</div>
</div> */}

//PART 2

// const withouNavRoutes = ["/seller"];

// function LandingNav() {
//   const classes = useStyles();
//   const {pathname} = useLocation();

//   function showNavigation() {
//     if (Auth.loggedIn()) {
//       return (
//         <div className={classes.root}>
//           <div className="header ">
//             <div className="navigation pxy__30">
//               <AppBar positon="static" color="transparent">
//                 <Toolbar className="navbar d__flex">
//                   <Link to="/shop" edge="end" className="nav__items px__30" >Shop</Link>
//                   <Link to="/orderHistory" edge="end" className="nav__items px__30" >Order History</Link>
//                   <a href="/" onClick={() => Auth.logout()}>
//                     Logout
//                   </a>
//                 </Toolbar>
//               </AppBar>
//             </div>
//           </div>
//         </div>
//       );
//     } else {
//       return (
//         <div className={classes.root}>
//           <div className="header ">
//             <div className="navigation">
//               <AppBar positon="static" color="transparent">
//                 <Toolbar className="navbar d__flex">
//                   <Link to="/shop" edge="end" className="nav__items px__30" >Shop</Link>
//                   <Link to="/signup" edge="end" className="nav__items px__30" >Signup</Link>
//                   <Link to="/login" edge="end" className="nav__items px__30" >Login</Link>
//                 </Toolbar>
//               </AppBar>
//             </div>
//           </div>
//         </div>
//       );
//     }
//   }
//   if (withouNavRoutes.some((item) => pathname.includes(item))) return null;
//   return (
//     <div className={classes.root}>
//       <div className="header ">
//         <div className="navigation pxy__30">
//           <header>
//             <AppBar positon="static" color="transparent">
//               <Toolbar className="d__flex">
//                 <Link to="/" edge="end">
//                   Plant It - Sell It
//                 </Link>

//                 <nav>{showNavigation()}</nav>
//               </Toolbar>
//             </AppBar>
//           </header>
//         </div>
//       </div>
//     </div>
//   );
// }
{
  /* <div className={classes.root}>
<div className="header ">
  <div className="navigation pxy__30">
    <header>
     
        <Toolbar disableGutters="true"  className="d__flex">
          <Link to="/" edge="end">
            Plant It - Sell It
          </Link>

          <nav>{showNavigation()}</nav>
        </Toolbar>
     
    </header>
  </div>
</div>
</div> */
}
