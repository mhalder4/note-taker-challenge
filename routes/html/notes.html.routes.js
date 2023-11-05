const router = require("express").Router();
const path = require("path");

// Html page for notes page
// router.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "public/notes.html"));
// })

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../.././public/notes.html"));
})


module.exports = router;