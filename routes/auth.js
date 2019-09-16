const express = require("express");
const router = express.Router();

// @router     GET api/auth
// @desc       Get logged in user
// @access     Private

router.get("/", (req, res) => {
  res.send("Get Logged in user");
});
// @router     POST api/auth
// @desc       Auth user and get token
// @access     Public

router.post("/", (req, res) => {
  res.send("Log in user");
});

module.exports = router;
