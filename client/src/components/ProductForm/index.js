import React, { useState } from "react";
import { Link } from "react-router-dom";

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

function ProductForm() {
  //s3 image upload state & event handlers
  const [file, setFile] = useState();
  const [description, setDescription] = useState("");
  const [images, setImages] = useState([]);
  // console.log(images);

  const submit = async (event) => {
    event.preventDefault();
    //add error handling
    const result = await postImage({ image: file, description });
    // console.log(result);
    setImages([result, ...images]);
  };

  const fileSelected = (event) => {
    const file = event.target.files[0];
    setFile(file);
  };
  /// ends here

  return (
    <div>
      <h3>S3 Testing</h3>

      {Auth.loggedIn() ? (
        <>
          <h4>image form Testing</h4>
          {/* form for S2 image upload */}
          <form onSubmit={submit}>
            <input
              onChange={fileSelected}
              type="file"
              multiple
              accept="image/*"
            ></input>
            <input
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              type="text"
            ></input>
            <button type="submit">Submit</button>
          </form>
          {/* display images that have been uploaded */}
          {images.map((image, index) => (
            <div key={index}>
              <img src={image.imagePath}></img>
            </div>
          ))}
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
