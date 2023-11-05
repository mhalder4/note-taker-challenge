const router = require("express").Router();

const notesApiRoutes = require("./api/notes.api.routes");

const notesHTMLRoutes = require("./html/notes.html.routes");


router.use("/api/notes", notesApiRoutes);

router.use("/notes", notesHTMLRoutes);


module.exports = router;