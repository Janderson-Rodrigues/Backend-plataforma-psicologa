const Consulta = require('../models/consultaModel');

const getAllConsultas = async (req, res) => {
    try {
        const consultas = await Consulta.listarConsultas();
        res.json(consultas);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const createConsulta = async (req, res) => {
    try {
        const { id_profissional, id_paciente, data_hora, status } = req.body;
        const novaConsulta = await Consulta.addConsulta(id_profissional, id_paciente, data_hora, status);
        res.status(201).json(novaConsulta);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateConsulta = async (req, res) => {
    try {
        const { id } = req.params;
        const { id_profissional, id_paciente, data_hora, status } = req.body;
        const consultaAtualizada = await Consulta.atualizarConsulta(id, { id_profissional, id_paciente, data_hora, status });
        res.json(consultaAtualizada);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteConsulta = async (req, res) => {
    try {
        const { id } = req.params;
        await Consulta.deletarConsulta(id);
        res.json({ message: "Consulta deletada com sucesso." });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { getAllConsultas, createConsulta, updateConsulta, deleteConsulta };