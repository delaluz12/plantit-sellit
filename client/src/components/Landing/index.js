import React from 'react';
import './landing.css';
import './main.css';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LandingSlide from '../LandingSlide';
// import LandingNav from '../LandingNav';


function Landing() {

    const useStyles = makeStyles((theme) => ({
        root: {
          flexGrow: 1,
        },
        paper: {
          padding: theme.spacing(2),
          textAlign: 'center',
          color: theme.palette.text.secondary,
        },
      }));

    const classes = useStyles();

    return (
        <div className = "home">
            <Box >
           <div className = "home__bg">
            {/* <LandingNav/> */}
            {/* home content */}
            <div className={classes.root}>
            <Box 
             px={{xs:1, sm:0}}
             py={{xs:1, sm:0}}>
                <Grid container spacing={1}>
                <div className="home__content row">
                    <Grid item xs={12} sm={12} md={8}>
                    <div className="home__meta">
                        
                        <h2 className="home_text  plantIt">
                        Plant it
                        </h2>
                        <h3 className="home_text sweet  sellIt">
                         Sell it
                        </h3>
                    </div>
                    <div className="home_meta">
                    <h1 className="home_text ">
                        a propagator's paradise
                        </h1>
                    </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                     <LandingSlide/>
                    </Grid>

                </div>
                </Grid>
                </Box>
            </div>
           </div>
           </Box>
        </div>
    )
}

export default Landing;