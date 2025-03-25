const Usuario = require('../models/usuarioModel');

const getAllUsuarios = async (req, res) => {
    try {
        const usuarios = await Usuario.listarUsuarios();
        res.json(usuarios);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const createUsuario = async (req, res) => {
    try {
        const { nome, email, senha, tipo } = req.body;
        const novoUsuario = await Usuario.addUsuario(nome, email, senha, tipo);
        res.status(201).json(novoUsuario);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateUsuario = async (req, res) => {
    try {
        const { id } = req.params;
        const { nome, email, senha, tipo } = req.body;
        const usuarioAtualizado = await Usuario.atualizarUsuario(id, { nome, email, senha, tipo });
        res.json(usuarioAtualizado);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteUsuario = async (req, res) => {
    try {
        const { id } = req.params;
        await Usuario.deletarUsuario(id);
        res.json({ message: "Usuário deletado com sucesso." });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { getAllUsuarios, createUsuario, updateUsuario, deleteUsuario };