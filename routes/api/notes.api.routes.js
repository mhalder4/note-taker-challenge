const router = require("express").Router();
const notesData = require("../../db/db.json");

router.get("/", async (req, res) => {
  try {
    const payload = await notesData;
    res.status(200).json({ status: "success", payload });
  } catch (err) {
    res.status(500).json({ status: "error", payload: err.message });
  }
})

// router.get("/", (req, res) => {
//   res.send("got api notes");
// })

module.exports = router;