const GrupoApoio = require('../models/grupoapoioModel');


const getAllGrupos = async (req, res) => {
    try {
        const grupos = await GrupoApoio.listarGruposApoio();
        res.json(grupos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const createGrupo = async (req, res) => {
    try {
        const { nome, descricao, regiao } = req.body;
        const novoGrupo = await GrupoApoio.addGrupoApoio(nome, descricao, regiao,);
        res.status(201).json(novoGrupo);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateGrupo = async (req, res) => {
    try {
        const { id } = req.params;
        const { nome, descricao } = req.body;
        const grupoAtualizado = await GrupoApoio.atualizarGrupoApoio(id, { nome, descricao });
        res.json(grupoAtualizado);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteGrupo = async (req, res) => {
    try {
        const { id } = req.params;
        await GrupoApoio.deletarGrupoApoio(id);
        res.json({ message: "Grupo de apoio deletado com sucesso." });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { getAllGrupos, createGrupo, updateGrupo, deleteGrupo };
