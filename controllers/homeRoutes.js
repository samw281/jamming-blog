const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("home");
});

router.get("/home", (req, res) => {
  res.render("home");
});

router.get("/login", (req, res) => {
  res.render("login");
});

router.get('/dashboard', (req, res) => {
  res.render('dashboard')
})

module.exports = router;