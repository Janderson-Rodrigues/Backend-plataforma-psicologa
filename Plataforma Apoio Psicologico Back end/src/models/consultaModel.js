const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const listarConsultas = async () => {
    try {
        return await prisma.consulta.findMany({
            include: { profissional: true, paciente: true },
        });
    } catch (error) {
        console.error("Erro ao listar consultas:", error);
        throw new Error("Não foi possível listar as consultas.");
    }
};

const addConsulta = async (id_profissional, id_paciente, data_hora, status) => {
    try {
        return await prisma.consulta.create({
            data: { id_profissional, id_paciente, data_hora, status },
        });
    } catch (error) {
        console.error("Erro ao criar consulta:", error);
        throw new Error("Não foi possível criar a consulta.");
    }
};

const atualizarConsulta = async (id, { id_profissional, id_paciente, data_hora, status }) => {
    try {
        return await prisma.consulta.update({
            where: { id_consulta: Number(id) },
            data: { id_profissional, id_paciente, data_hora, status },
        });
    } catch (error) {
        console.error("Erro ao atualizar consulta:", error);
        throw new Error("Não foi possível atualizar a consulta.");
    }
};

const deletarConsulta = async (id) => {
    try {
        await prisma.consulta.delete({
            where: { id_consulta: Number(id) },
        });
        return { message: "Consulta deletada com sucesso" };
    } catch (error) {
        console.error("Erro ao deletar consulta:", error);
        throw new Error("Não foi possível deletar a consulta.");
    }
};

module.exports = { listarConsultas, addConsulta, atualizarConsulta, deletarConsulta };