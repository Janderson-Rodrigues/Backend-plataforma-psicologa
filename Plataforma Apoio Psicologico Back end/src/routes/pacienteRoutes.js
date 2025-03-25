const express = require("express");
const router = express.Router();
const pacienteController = require('../controllers/pacienteControllers');

router.get("/", pacienteController.getAllPacientes);
router.post("/", pacienteController.createPaciente);
router.put("/:id", pacienteController.updatePaciente);
router.delete("/:id", pacienteController.deletePaciente);

module.exports = router;