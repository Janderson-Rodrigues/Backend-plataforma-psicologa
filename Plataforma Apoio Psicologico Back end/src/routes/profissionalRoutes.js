const express = require("express");
const router = express.Router();
const profissionalController = require('../controllers/profissionalControllers');

router.get("/", profissionalController.getAllProfissionais);
router.post("/", profissionalController.createProfissional);
router.put("/:id", profissionalController.updateProfissional);
router.delete("/:id", profissionalController.deleteProfissional);

module.exports = router;