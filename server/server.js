const mongoose = require("mongoose");
const app = require("./app");

// Database connection // mongoAtlas = mongodb+srv://jngisiro:<password>@broveny-28tim.mongodb.net/mafuta
// local = mongodb://localhost/mafuta
mongoose
  .connect("mongodb://localhost/netfrix", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  })
  .then(() => console.log("Connected to Mongodb"))
  .catch(err => console.error("Could not connect to mongodb...", err));

// Setting up PORT
const port = process.env.PORT || 5000;

// Starting the server
app.listen(port, () => console.log(`Listening on port ${port}...`));
