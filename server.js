const express = require("express");
const mongoose = require("mongoose");
const app = express();
const htmlRoutes = require("./routes/apiroutes.js");

//port we're listening to
const PORT = process.env.PORT || 8080;

// setting up express
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

//connecting to mongoose
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.on("connected", () => {
  console.log("mongoose connected");
});
connection.on("error", (err) => {
  console.log("mongoose error", err);
});

//routes
app.use(htmlRoutes);
require("./routes/htmlroutes")(app);


//listening to the port and loggingit to the console
app.listen(PORT, () => {
  console.log(`App running on http://localhost:${PORT}`);
});
