const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const { graphqlHTTP } = require("express-graphql");
const { connectDB } = require("./config/db");
const schema = require("./graphql/schema");
dotenv.config();
connectDB();

const port = process.env.PORT || 5000;
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.send("Hello Everyone");
});
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(port, () => console.log(`Server is running on port: ${port}`));
