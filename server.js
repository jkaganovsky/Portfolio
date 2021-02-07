// Requiring necessary npm packages
const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");
const app = express();

// Setting up PORT
const PORT = process.env.PORT || 3000;

// Creating express app
app.use(express.static(`public`));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Configure handlebars
app.engine("handlebars", exphbs ({ defaultLayout: "main" }));

// Sets handlebars
app.set("view engine", "handlebars");

// Requiring Routes
app.use(require("./routes/html-routes"));

// Start Server
app.listen(PORT, function() {
    console.log(
        "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
        PORT,
        PORT
    );
});