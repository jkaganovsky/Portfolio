// Requiring path in order to use relative routes to the HTML files
const router = require("express").Router();
const path = require("path");

// Main Page
router.get("/", (req, res) => {
    res.render("index");
});

// About Me Page
router.get("/about", (req, res) => {
    res.render("about");
});

// Project Page
router.get("/projects", (req, res) => {
    res.render("projects");
});

// Contact Me Page
router.get("/contact", (req, res) => {
    res.render("contact");
});

module.exports = router;