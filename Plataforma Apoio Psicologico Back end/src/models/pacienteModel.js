const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const listarPacientes = async () => {
    try {
        return await prisma.paciente.findMany({
            include: { usuario: true },
        });
    } catch (error) {
        console.error("Erro ao listar pacientes:", error);
        throw new Error("Não foi possível listar os pacientes.");
    }
};

const addPaciente = async (id_usuario, data_nascimento, genero) => {
    try {
        return await prisma.paciente.create({
            data: { 
                id_usuario,
                 data_nascimento ,
                 genero 
            },
        });
    } catch (error) {
        console.error("Erro ao criar paciente:", error);
        throw new Error("Não foi possível criar o paciente.");
    }
};

const atualizarPaciente = async (id, { data_nascimento, genero }) => {
    try {
        return await prisma.paciente.update({
            where: { id_paciente: Number(id) },
            data: { data_nascimento, genero },
        });
    } catch (error) {
        console.error("Erro ao atualizar paciente:", error);
        throw new Error("Não foi possível atualizar o paciente.");
    }
};

const deletarPaciente = async (id) => {
    try {
        await prisma.paciente.delete({
            where: { id_paciente: Number(id) },
        });
        return { message: "Paciente deletado com sucesso" };
    } catch (error) {
        console.error("Erro ao deletar paciente:", error);
        throw new Error("Não foi possível deletar o paciente.");
    }
};

module.exports = { listarPacientes, addPaciente, atualizarPaciente, deletarPaciente };