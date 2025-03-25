const express = require("express");
const router = express.Router();
const depoimentoController = require('../controllers/depoimentoControllers');

router.get("/", depoimentoController.getAllDepoimentos);
router.post("/", depoimentoController.createDepoimento);
router.put("/:id", depoimentoController.updateDepoimento);
router.delete("/:id", depoimentoController.deleteDepoimento);

module.exports = router;