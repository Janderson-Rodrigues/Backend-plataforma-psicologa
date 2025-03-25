const express = require("express");
const router = express.Router();
const anamneseController = require('../controllers/anmeneseControllers');

router.get("/", anamneseController.getAllAnamneses);
router.post("/", anamneseController.createAnamnese);
router.put("/:id", anamneseController.updateAnamnese);
router.delete("/:id", anamneseController.deleteAnamnese);

module.exports = router;