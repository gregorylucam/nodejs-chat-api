const express = require("express");
const app = express();
const mongoose = require("mongoose");

// Api Routes Import
const blogRouter = require("./routes/BlogRoutes");
 
// middleware
app.use(express.json());
 
app.listen(3001, () => {
  console.log("Server is running on port 3001");
});

// configure mongoose
mongoose.connect('mongodb://localhost/CRUD', {
  useNewUrlParser: true,
  useUnifiedTopology: true,})   
.then(() => console.log("Database connected!"))
.catch(err => console.log(err));

// Api Routes Usage
app.use("/api/blogs", blogRouter);
 
module.exports = app;