import React, {useState, useEffect} from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Auth from "../../utils/auth";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@material-ui/core";
// import auth from "../../utils/auth";

const withouNavRoutes = ["/seller", "/dashboard"];

function Nav() {
  // const classes = useStyles();
  const { pathname } = useLocation();
  // const [role, setRole] =useState('')
  // if (Auth.loggedIn()){
  //   const {data} = Auth.getProfile();
  //   setRole(data.role)
  // }
  
  
  
  
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/shop">Shop</Link>
          </li>
          <li className="mx-1">
            <Link to="/orderHistory">Order History</Link>
          </li>{" "}
          {Auth.isSeller() === true ? (
            <li className="mx-1">
              <Link to="/seller/home">Dashboard</Link>
            </li>
          ) : null}
          <li className="mx-1">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/shop">Shop</Link>
          </li>
          <li className="mx-1">
            <Link to="/signup">Signup</Link>
          </li>
          <li className="mx-1">
            <Link to="/login">Login</Link>
          </li>
        </ul>
      );
    }
  }
  if (withouNavRoutes.some((item) => pathname.includes(item))) return null;
  return (
    <header className="flex-row px-1">
      <h1>
        <Link to="/">
          {/* <span role="img" aria-label="shopping bag">🛍️</span> */}
          Plant It - Sell It
        </Link>
      </h1>

      <nav>{showNavigation()}</nav>
    </header>
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
// <div className={classes.root}>
// <div className="header ">
//   <div className="navigation pxy__30">
//     <AppBar position="static" color="primary">
//       <Toolbar className="navbar d__flex">
//         <Link to="/shop" edge="end" className="nav__items px__30" >Shop</Link>
//         <Link to="/orderHistory" edge="end" className="nav__items px__30" >Order History</Link>
//         <a href="/" onClick={() => Auth.logout()}>
//           Logout
//         </a>
//       </Toolbar>
//     </AppBar>
//   </div>
// </div>
// </div>
// );
// } else {
// return (
// <div className={classes.root}>
// <div className="header ">
//   <div className="navigation">

//       <Toolbar disableGutters="true" className="navbar d__flex">
//         <Link to="/shop" edge="end" className="nav__items px__30" >Shop</Link>
//         <Link to="/signup" edge="end" className="nav__items px__30" >Signup</Link>
//         <Link to="/login" edge="end" className="nav__items px__30" >Login</Link>
//       </Toolbar>

//   </div>
// </div>
// </div>

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
