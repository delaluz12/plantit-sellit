import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  TextField,
  InputLabel,
  FormControl,
  FormHelperText,
  Select,
  makeStyles,
  Button,
} from "@material-ui/core";
import { useQuery, useMutation } from "@apollo/client";
import { idbPromise } from "../../utils/helpers";
import Resizer from "react-image-file-resizer";

//S3 axios import for making call to post image
import axios from "axios";

import Auth from "../../utils/auth";

//import addProduct mutation
import { ADD_PRODUCT } from "../../utils/mutations";

//import cat query to get ids to pass back w/ new obj
import { QUERY_CATEGORIES } from "../../utils/queries";

//async fnc to post image to server via multer
async function postImage({ image, description }) {
  const formData = new FormData();
  formData.append("image", image);
  formData.append("description", description);

  const result = await axios.post("/s3images", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return result.data;
}

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(2),
    minWidth: 120,
    marginTop: "10px",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function ProductForm() {
  const classes = useStyles();
  const sellerId = Auth.getProfile();
  // console.log(sellerId.data._id);
  //try to capture prod details as one object to send
  const [product, setProduct] = useState({
    name: "",
    description: "",
    imagePath: "",
    price: 0.99,
    category: "",
    sellerId: sellerId.data._id,
    
  });
  console.log(product);

  //capture catIds to pass into form
  const { loading, data } = useQuery(QUERY_CATEGORIES);
  // console.log(data);

  const [catIds, setCatIds] = useState([]);
  // setCatIds(data.categories);
  // console.log(catIds);

  useEffect(() => {
    if (data) {
      const categories = data.categories;
      setCatIds(categories);
      categories.forEach((category) => {
        idbPromise("prodCategories", "put", category);
      });
    } else if (!loading) {
      idbPromise("prodCategories", "get").then((categories) => {
        setCatIds(categories);
      });
    }
  }, [data, loading]);

  const handleChange = (event) => {
    event.preventDefault();

    //try capturing all in one object
    setProduct({
      ...product,
      
      [event.target.name]: event.target.value,
    });
    // console.log(product);
  };

  //s3 image upload state & event handlers
  const [file, setFile] = useState();
  const [description, setDescription] = useState("");
  const [images, setImages] = useState([]);
  

  // console.log(images);

  const [addProduct] = useMutation(ADD_PRODUCT);

  const submit = async (event) => {
    event.preventDefault();
    //add error handling
    try {
      // console.log("product created", product);
      //send image to s3 bucket first to get back path to store in MongoDB
      const result = await postImage({ image: file, description });
      // console.log(result.imagePath.split('/').filter(entry => entry !== ''));

      // split path to get back just the numbers & filter out empty strings
      const paths = result.imagePath.split("/").filter((entry) => entry !== "");

      //from those grab the last path in the array
      const s3path = paths[paths.length - 1];
      // console.log(s3path)

      //set the product imagePath to the path sent back from S3
      product.imagePath = s3path;
      setProduct({
        ...product,
      });
      // console.log("product with imagePath", product);

      setImages([result, ...images]);
      // console.log(product);
      // send to mongodb via apollo
      console.log(typeof product.price)
      const float = parseFloat(product.price);
      
      
      console.log(product);
      const mutationResponse = await addProduct({
        variables: {
          name: product.name,
          description: product.description,
          category: product.category,
          price: float,
          sellerId: product.sellerId,
          image: product.imagePath,
          
        },
      });
      // console.log(mutationResponse);


      const prodID = mutationResponse.data.addProduct._id;

      setProduct({
        name: "",
        description: "",
        imagePath: "",
        price: "",
        category: "",
        sellerId: sellerId.data._id,
      });
      window.location.assign(`/seller/product/${prodID}`)
    } catch (error) {
      console.log(error);
    }
  };

  const fileSelected = async (event) => {
    const file = event.target.files[0];

    //resize image file
    const image = await resizeFile(file);
    // console.log(image);
    const newFile = dataURIToBlob(image);

    // pass resized file to setFile state handler which will pass it to postImage()
    setFile(newFile);
  };
  /// ends here

  //resizer functions
  const resizeFile = (file) =>
    new Promise((resolve) => {
      Resizer.imageFileResizer(
        file,
        600,
        400,
        "JPEG",
        90,
        0,
        (uri) => {
          resolve(uri);
        },
        "base64"
      );
    });

  const dataURIToBlob = (dataURI) => {
    const splitDataURI = dataURI.split(",");
    const byteString =
      splitDataURI[0].indexOf("base64") >= 0
        ? atob(splitDataURI[1])
        : decodeURI(splitDataURI[1]);
    const mimeString = splitDataURI[0].split(":")[1].split(";")[0];
    const ia = new Uint8Array(byteString.length);
    for (let i = 0; i < byteString.length; i++)
      ia[i] = byteString.charCodeAt(i);
    return new Blob([ia], { type: mimeString });
  };

  return (
    <div>
      {Auth.loggedIn() ? (
        <>
          <h4></h4>
          {/* form for S2 image upload */}

          <form
            onSubmit={submit}
            noValidate
            autoComplete="off"
            className={classes.formControl}
          >
            <TextField
              id="outlined-basic"
              label="Pothos Cutting"
            
              
              helperText="required field"
              variant="outlined"
              name="name"
              value={product.name}
              onChange={handleChange}
              className={classes.formControl}
              
            />
            <TextField
              id="outlined-textarea"
              label="Listing Description"
              helperText="required field"
              multiline
              variant="outlined"
              name="description"
              value={product.description}
              onChange={handleChange}
              className={classes.formControl}
              
            />
            <TextField
              id="outlined-basic"
              helperText="required field"
              variant="outlined"
              onChange={fileSelected}
              type="file"
              accept="image/*"
              className={classes.formControl}
              
            ></TextField>
            {/* <TextField
                id="outlined-basic"
                label="image description"
                variant="outlined"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                type="text"
              ></TextField> */}
            <TextField
              id="outlined-basic"
              label="Price"
              variant="outlined"
              helperText="required field"
              name="price"
              value={product.price}
              onChange={handleChange}
              type="number"
              className={classes.formControl}
              
            />
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel htmlFor="outlined-age-native-simple" helpertext="required field">
                Category
              </InputLabel>
              <Select
              
                native
                value={product.category}
                onChange={handleChange}
                label="category"
                inputProps={{ name: "category" }}
              >
                <option aria-label="None" value="" />
                {catIds.map((cat) => (
                  <option key={cat._id} value={cat._id}>
                    {cat.name}
                  </option>
                ))}
                {/* <option value="herbs">Herbs</option> */}
                {/* <option value="Vegetables">Vegetables </option> */}
                {/* <option value="House Plants">House Plants</option> */}
                {/* <option value="Flowering Plants">Flowering Plants</option> */}
                {/* <option value="Succulents">Succulents</option> */}
              </Select>
            </FormControl>{" "}
            <br />
            <Button
              variant="contained"
              color="primary"
              type="submit"
              className={classes.formControl}
            >
              Submit
            </Button>
          </form>
          {/* display images that have been uploaded */}
          {/* {images.map((image, index) => (
              <div key={index}>
                <img src={image.imagePath}></img>
              </div>
            ))} */}
            
        </>
      ) : (
        <p>
          You need to be logged in to create a Product. Please login{" "}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
    </div>
  );
}

export default ProductForm;
