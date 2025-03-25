const Avaliacao = require('../models/avaliacaoModel');

const getAllAvaliacoes = async (req, res) => {
    try {
        const avaliacoes = await Avaliacao.listarAvaliacoes();
        res.json(avaliacoes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const createAvaliacao = async (req, res) => {
    try {
        const { id_usuario, id_profissional, nota, comentario } = req.body;
        const novaAvaliacao = await Avaliacao.addAvaliacao(id_usuario, id_profissional, nota, comentario);
        res.status(201).json(novaAvaliacao);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateAvaliacao = async (req, res) => {
    try {
        const { id } = req.params;
        const { nota, comentario } = req.body;
        const avaliacaoAtualizada = await Avaliacao.atualizarAvaliacao(id, { nota, comentario });
        res.json(avaliacaoAtualizada);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteAvaliacao = async (req, res) => {
    try {
        const { id } = req.params;
        await Avaliacao.deletarAvaliacao(id);
        res.json({ message: "Avaliação deletada com sucesso." });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { getAllAvaliacoes, createAvaliacao, updateAvaliacao, deleteAvaliacao };