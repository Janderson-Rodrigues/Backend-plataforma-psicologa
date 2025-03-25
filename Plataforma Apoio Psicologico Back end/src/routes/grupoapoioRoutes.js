const express = require("express");
const router = express.Router();
const grupoApoioController = require('../controllers/grupodeapoioControllers');

router.get("/", grupoApoioController.getAllGrupos);
router.post("/", grupoApoioController.createGrupo);
router.put("/:id", grupoApoioController.updateGrupo);
router.delete("/:id", grupoApoioController.deleteGrupo);

module.exports = router;
