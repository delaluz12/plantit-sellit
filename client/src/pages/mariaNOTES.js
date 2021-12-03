// my attempt at my figma design

import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import { Container, Button, Grid, Paper } from "@material-ui/core";

import SellerItem from "../components/SellerItem/index";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));


<Grid container className={useStyles.root} spacing={2}>
          <Grid
            item
            xs={12}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Button variant="contained">
              {" "}
              <Link to="/orderHistory"> My Purchases</Link>
            </Button>
          </Grid>
          <Grid
            container
            className={useStyles.root}
            spacing={2}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Grid
              item
              xs={6}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <SellerItem />
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Button variant="contained">
              {" "}
              <Link to="/addProduct"> Add Product</Link>
            </Button>
          </Grid>
          <Grid
            item
            xs={12}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Button variant="contained">
              {" "}
              <Link to="/seller"> View Orders</Link>
            </Button>
          </Grid>
        </Grid>