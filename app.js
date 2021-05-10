const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

//routes
app.get("/", (req, res) => {
  res.render("home");
});

// Port listener
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
