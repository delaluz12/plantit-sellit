
require("dotenv").config();
const express = require("express");
const logger = require('morgan')
const { ApolloServer } = require("apollo-server-express");
const path = require("path");

//s3 reqs
const fs = require("fs");
const util = require("util");
const unlinkFile = util.promisify(fs.unlink);
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const { uploadFile, getFileStream } = require("./s3");
//

const { typeDefs, resolvers } = require("./schemas");
const { authMiddleware } = require("./utils/auth");
const db = require("./config/connection");

const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

server.applyMiddleware({ app });

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(logger('dev'));

// Serve up static assets
app.use("/images", express.static(path.join(__dirname, "../client/images")));

//add s3 server code
app.get("/s3images/:key", async (req, res) => {
  // console.log(req.params);
  const key = req.params.key;
  console.log("looking up s3 image with this key:", key);



  if (key.length === 32 && key !== 'undefined'){
    try {
      const readStream = await getFileStream(key);
      readStream.pipe(res);
    } catch (error) {
      console.log(error)
    }
  } else {
    res.status(400).json( "XXXX Your request was bad, and you should feel bad X( ")
  }

  // try {
  //   const readStream = await getFileStream(key);
  //   if (readStream) {
  //     readStream.pipe(res);
  //   } else {
  //     res.send(401).json("S3 broken :(")
  //   }
  // } catch (err) {
  //   console.log(err);
  // }
});

app.post("/s3images", upload.single("image"), async (req, res) => {
  const file = req.file;
  // console.log(file);

  //can do the following:
  // 1. apply filter
  // 2. resize
  //did resize/compress on the front-end

  const result = await uploadFile(file);
  await unlinkFile(file.path);
  console.log(result);
  const description = req.body.description;
  res.send({ imagePath: `/s3images/${result.Key}` });
});
///

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "../client/build")));
// }

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });

db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });
});
