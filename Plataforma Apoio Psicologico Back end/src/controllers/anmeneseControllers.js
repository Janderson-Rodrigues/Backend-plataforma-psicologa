const Anamnese = require('../models/anmeneseModel');

// Listar todas as anamneses
const getAllAnamneses = async (req, res) => {
    try {
        const anamneses = await Anamnese.listarAnamneses();
        res.status(200).json(anamneses); // Use status 200 para respostas bem-sucedidas
    } catch (error) {
        console.error("Erro ao listar anamneses:", error);
        res.status(500).json({ error: "Erro interno ao listar anamneses." });
    }
};

// Criar uma nova anamnese
const createAnamnese = async (req, res) => {
    try {
        const { id_paciente, sintomas, uso_medicamentos, objetivo_terapia } = req.body;

        // Validação básica dos dados de entrada
        if (!id_paciente || !sintomas || !uso_medicamentos || !objetivo_terapia) {
            return res.status(400).json({ error: "Todos os campos são obrigatórios." });
        }

        const novaAnamnese = await Anamnese.addAnamnese(id_paciente, sintomas, uso_medicamentos, objetivo_terapia);
        res.status(201).json(novaAnamnese);
    } catch (error) {
        console.error("Erro ao criar anamnese:", error);

        // Tratamento de erros específicos
        if (error.message.includes("Paciente não encontrado")) {
            return res.status(404).json({ error: "Paciente não encontrado. Verifique o ID do paciente." });
        }

        res.status(500).json({ error: "Erro interno ao criar anamnese." });
    }
};

// Atualizar uma anamnese existente
const updateAnamnese = async (req, res) => {
    try {
        const { id } = req.params;
        const { sintomas, uso_medicamentos, objetivo_terapia } = req.body;

        // Validação básica dos dados de entrada
        if (!sintomas || !uso_medicamentos || !objetivo_terapia) {
            return res.status(400).json({ error: "Todos os campos são obrigatórios." });
        }

        const anamneseAtualizada = await Anamnese.atualizarAnamnese(id, { sintomas, uso_medicamentos, objetivo_terapia });

        if (!anamneseAtualizada) {
            return res.status(404).json({ error: "Anamnese não encontrada." });
        }

        res.status(200).json(anamneseAtualizada);
    } catch (error) {
        console.error("Erro ao atualizar anamnese:", error);
        res.status(500).json({ error: "Erro interno ao atualizar anamnese." });
    }
};

// Deletar uma anamnese
const deleteAnamnese = async (req, res) => {
    try {
        const { id } = req.params;

        const anamneseDeletada = await Anamnese.deletarAnamnese(id);

        if (!anamneseDeletada) {
            return res.status(404).json({ error: "Anamnese não encontrada." });
        }

        res.status(200).json({ message: "Anamnese deletada com sucesso." });
    } catch (error) {
        console.error("Erro ao deletar anamnese:", error);
        res.status(500).json({ error: "Erro interno ao deletar anamnese." });
    }
};

module.exports = {
    getAllAnamneses,
    createAnamnese,
    updateAnamnese,
    deleteAnamnese
};