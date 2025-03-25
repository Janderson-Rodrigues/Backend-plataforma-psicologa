const Paciente = require('../models/pacienteModel');

const getAllPacientes = async (req, res) => {
    try {
        const pacientes = await Paciente.listarPacientes();
        res.json(pacientes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const createPaciente = async (req, res) => {
    try {
        const { id_usuario, data_nascimento, genero } = req.body;
        const novoPaciente = await Paciente.addPaciente(id_usuario, data_nascimento, genero);
        res.status(201).json(novoPaciente);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updatePaciente = async (req, res) => {
    try {
        const { id } = req.params;
        const { data_nascimento, genero } = req.body;
        const pacienteAtualizado = await Paciente.atualizarPaciente(id, { data_nascimento, genero });
        res.json(pacienteAtualizado);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deletePaciente = async (req, res) => {
    try {
        const { id } = req.params;
        await Paciente.deletarPaciente(id);
        res.json({ message: "Paciente deletado com sucesso." });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { getAllPacientes, createPaciente, updatePaciente, deletePaciente };