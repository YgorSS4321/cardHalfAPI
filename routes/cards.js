const express = require("express");
const router = express.Router();
const halfController = require("../controllers/halfController");

router.get("/", halfController.list);
router.get("/:cardField/", halfController.listByCardField);


//router.get("/show/:animalId/", halfController.show);
router.get("/create/", halfController.create);
router.post("/create/", halfController.create);
router.post("/:text/update", halfController.update);
//router.get("/:text/update", halfController.update);
router.get("/:text/delete", halfController.delete);

module.exports = router;