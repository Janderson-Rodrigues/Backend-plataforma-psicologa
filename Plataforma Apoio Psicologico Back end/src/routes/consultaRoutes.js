const express = require("express");
const router = express.Router();
const consultaController = require('../controllers/consultaControllers');

router.get("/", consultaController.getAllConsultas);
router.post("/", consultaController.createConsulta);
router.put("/:id", consultaController.updateConsulta);
router.delete("/:id", consultaController.deleteConsulta);

module.exports = router;