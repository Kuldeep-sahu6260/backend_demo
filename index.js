const express = require("express");
const env = require("dotenv");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");

//routes

const title = require("./router/title");

//environment variable or you can say constants
env.config();

mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.8iandec.mongodb.net/?retryWrites=true&w=majority`,
    {
      
      useNewUrlParser: true, 
      useUnifiedTopology: true 
    }
  )
  .then(() => {
    console.log("Database connected");
  });

 
app.use(cors());

app.use(express.json());
app.use("/public", express.static(path.join(__dirname, "uploads")));

app.use("/api", title);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});




