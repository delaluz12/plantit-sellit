import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import {Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography} from '@material-ui/core'

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
  });

const SellerItem= () => {
  return (
    <div className="container">
        <Card className={useStyles.root}>
      
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="250"
          image="/images/e28b6ab31d08fa014c06532447305e97"
          
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Golden Pothos
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Cuttings ready to be propagated in water or soil
          </Typography>
        </CardContent>
      
      <CardActions>
        <Button size="small" color="primary">
          View
        </Button>
        <Button size="small" color="primary">
          Edit
        </Button>
      </CardActions>
    </Card>
    </div>
  );
};

export default SellerItem;