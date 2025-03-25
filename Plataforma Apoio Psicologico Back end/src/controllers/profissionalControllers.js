const Profissional = require('../models/profissionalModel');

const getAllProfissionais = async (req, res) => {
    try {
        const profissionais = await Profissional.listarProfissionais();
        res.json(profissionais);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const createProfissional = async (req, res) => {
    try {
        const { id_usuario, crp, especialidade, localizacao, faixa_etaria_atendimento, atendimentos_gratuitos, disponibilidade, preco_consulta } = req.body;
        const novoProfissional = await Profissional.addProfissional(id_usuario, crp, especialidade, localizacao, faixa_etaria_atendimento, atendimentos_gratuitos, disponibilidade, preco_consulta);
        res.status(201).json(novoProfissional);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateProfissional = async (req, res) => {
    try {
        const { id } = req.params;
        const { crp, especialidade, localizacao, faixa_etaria_atendimento, atendimentos_gratuitos, disponibilidade, preco_consulta } = req.body;
        const profissionalAtualizado = await Profissional.atualizarProfissional(id, { crp, especialidade, localizacao, faixa_etaria_atendimento, atendimentos_gratuitos, disponibilidade, preco_consulta });
        res.json(profissionalAtualizado);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteProfissional = async (req, res) => {
    try {
        const { id } = req.params;
        await Profissional.deletarProfissional(id);
        res.json({ message: "Profissional deletado com sucesso." });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { getAllProfissionais, createProfissional, updateProfissional, deleteProfissional };