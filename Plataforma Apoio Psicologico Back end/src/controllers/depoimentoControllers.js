const Depoimento = require('../models/depoimentoModel');

const getAllDepoimentos = async (req, res) => {
    try {
        const depoimentos = await Depoimento.listarDepoimentos();
        res.json(depoimentos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const createDepoimento = async (req, res) => {
    try {
        const { texto } = req.body;
        const novoDepoimento = await Depoimento.addDepoimento(texto);
        res.status(201).json(novoDepoimento);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateDepoimento = async (req, res) => {
    try {
        const { id } = req.params;
        const { texto } = req.body;
        const depoimentoAtualizado = await Depoimento.atualizarDepoimento(id, { texto });
        res.json(depoimentoAtualizado);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteDepoimento = async (req, res) => {
    try {
        const { id } = req.params;
        await Depoimento.deletarDepoimento(id);
        res.json({ message: "Depoimento deletado com sucesso." });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { getAllDepoimentos, createDepoimento, updateDepoimento, deleteDepoimento };