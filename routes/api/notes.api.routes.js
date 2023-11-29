const router = require("express").Router();
const fs = require("fs");
const { v4: uuidv4 } = require('uuid');
const notesData = require("../../db/db.json");

router.get("/", async (req, res) => {
  try {
    const payload = await notesData;
    // res.status(200).json({ status: "success", payload });
    res.send(payload);
  } catch (err) {
    res.status(500).json({ status: "error", payload: err.message });
  }
})

router.post("/", async (req, res) => {
  // res.status(200).json({ status: "success", payload });
  // console.log(req.body);
  if (req.body) {
    const newNote = {
      title: req.body.title,
      text: req.body.text,
      id: uuidv4()
    }

    fs.readFile("./db/db.json", "utf8", (error, data) => {
      if (error) {
        return console.error(error);
      }
      console.log("Success.");
      // console.log(data);
      // console.log(JSON.parse(data));

      const file = JSON.parse(data);

      file.push(newNote);

      fs.writeFile("./db/db.json", JSON.stringify(file, null, 4), (err) =>
        err ? console.error(err) : console.log(`New note added.`))
    }
    )

    res.json({ status: "success", body: newNote })

    // fs.writeFile("./db/db.json", JSON.stringify(file), (err) =>
    //   err ? console.error(err) : console.log(`New note added.`))
  }

})

router.delete("/:id", async (req, res) => {
  try {
    const payload = req.params.id


    for (var i = 0; i < notesData.length; i++) {
      if (notesData[i].id === payload) {
        notesData.splice(i, 1);
        fs.writeFile("./db/db.json", JSON.stringify(notesData, null, 4), (err) =>
          err ? console.error(err) : console.log(`Note deleted.`))
      }
    }



    res.status(200).json({ status: "success", payload });
  } catch (err) {
    res.status(500).json({ status: "error", payload: err.message });
  }
})

// router.get("/", (req, res) => {
//   res.send("got api notes");
// })

module.exports = router;