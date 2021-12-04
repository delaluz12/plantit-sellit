import React from "react";
import { Link } from "react-router-dom";
import { pluralize } from "../../utils/helpers"
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import './productItem.css';

function ProductItem(item) {
  const [state, dispatch] = useStoreContext();

  const {
    image,
    name,
    _id,
    price
  } = item;

  const { cart } = state

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === _id)
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: _id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
      });
      idbPromise('cart', 'put', {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...item, purchaseQuantity: 1 }
      });
      idbPromise('cart', 'put', { ...item, purchaseQuantity: 1 });
    }
  }

  const useStyles = makeStyles({
    root: {
      maxWidth: 400,
    },
    media: {
      height: 140,
    },
    
  });
  
  const classes = useStyles();

  return (
    <div className="card px-1 py-1 itemCard">
      <Card className="cardItem">
              <CardActionArea>
      <Link to={`/products/${_id}`}>
        <CardMedia className={classes.media}>
        <LazyLoadImage alt={name}
          src={`/s3images/${image}`}>
        
          
       
        </LazyLoadImage>
        </CardMedia>
        <CardContent children="node">
          <Typography className={classes.itemName} >
        <p className="cardTitle">{name}</p>
        </Typography>
        </CardContent>
      </Link>
      </CardActionArea>
     
      <div>
      <CardContent>
        <Typography align="left" classes="object" color="inherit">
        {/* <div className="cardTitle">{quantity} {pluralize("item", quantity)} in stock</div> */}
        <span className="cardTitle">$ {price}</span>
        </Typography>
      </CardContent>  
      </div>
      <CardActions>
      <Button  className="addCart" contained size="small" onClick={addToCart}>Add to cart</Button>
      </CardActions>
      </Card>
    </div>
  );
}
   
export default ProductItem;
