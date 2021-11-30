import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  TextField,
  InputLabel,
  FormHelperText,
  FormControl,
  Select,
  NativeSelect,
  makeStyles,
  Button,
} from "@material-ui/core";

//S3 axios import for making call to post image
import axios from "axios";

import Auth from "../../utils/auth";

//async fnc to post image to server via multer
async function postImage({ image, description }) {
  const formData = new FormData();
  formData.append("image", image);
  formData.append("description", description);

  const result = await axios.post("/images", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return result.data;
}

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function ProductForm() {
  const classes = useStyles();
 

  //try to capture prod details as one object to send
  const [product, setProduct] = React.useState({
    name: "",
    description: "",
    imagePath: "",
    price: "",
    category: "",
  });

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

  const submit = async (event) => {
    event.preventDefault();
    //add error handling
    try {
      console.log("product created", product);
      //send image to s3 bucket first to get back path to store in MongoDB
      const result = await postImage({ image: file, description });
      // console.log(result.imagePath);

      //set the product imagePath to the path sent back from S3
      product.imagePath = result.imagePath;
      setProduct({
        ...product,
      });
      // console.log("product with imagePath", product);

      // setImages([result, ...images]);

      setProduct({
        name: "",
        description: "",
        imagePath: "",
        price: "",
        category: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  const fileSelected = (event) => {
    const file = event.target.files[0];
    setFile(file);
  };
  /// ends here

  return (
    <div>
      {Auth.loggedIn() ? (
        <>
          <h4></h4>
          {/* form for S2 image upload */}
          <div>
            <form onSubmit={submit} noValidate autoComplete="off">
              <TextField
                id="outlined-basic"
                label="Name of Product"
                variant="outlined"
                name="name"
                value={product.name}
                onChange={handleChange}
              />
              <TextField
                id="outlined-textarea"
                label="Product Description"
                placeholder="description"
                multiline
                variant="outlined"
                name="description"
                value={product.description}
                onChange={handleChange}
              />
              <TextField
                id="outlined-basic"
                variant="outlined"
                onChange={fileSelected}
                type="file"
                accept="image/*"
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
                name="price"
                value={product.price}
                onChange={handleChange}
                type='number'
              />
              <FormControl variant="outlined">
                <InputLabel htmlFor="outlined-age-native-simple">
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
                  <option value="herbs">Herbs</option>
                  <option value="Vegetables">Vegetables </option>
                  <option value="House Plants">House Plants</option>
                  <option value="Flowering Plants">Flowering Plants</option>
                  <option value="Succulents">Succulents</option>
                </Select>
              </FormControl>{" "}
              <br />
              <Button variant="contained" color="primary" type="submit">
                Submit
              </Button>
            </form>
            {/* display images that have been uploaded */}
            {images.map((image, index) => (
              <div key={index}>
                <img src={image.imagePath}></img>
              </div>
            ))}
          </div>
        </>
      ) : (
        <p>
          You need to be logged in to share your thoughts. Please{" "}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
    </div>
  );
}

export default ProductForm;
