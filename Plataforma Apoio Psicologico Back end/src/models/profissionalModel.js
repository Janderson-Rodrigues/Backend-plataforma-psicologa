const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const listarProfissionais = async () => {
    try {
        return await prisma.profissional.findMany({
            include: { usuario: true },
        });
    } catch (error) {
        console.error("Erro ao listar profissionais:", error);
        throw new Error("Não foi possível listar os profissionais.");
    }
};

const addProfissional = async (id_usuario, crp, especialidade, localizacao, faixa_etaria_atendimento, atendimentos_gratuitos, disponibilidade, preco_consulta) => {
    try {
        return await prisma.profissional.create({
            data: { id_usuario, crp, especialidade, localizacao, faixa_etaria_atendimento, atendimentos_gratuitos, disponibilidade, preco_consulta },
        });
    } catch (error) {
        console.error("Erro ao criar profissional:", error);
        throw new Error("Não foi possível criar o profissional.");
    }
};

const atualizarProfissional = async (id, { crp, especialidade, localizacao, faixa_etaria_atendimento, atendimentos_gratuitos, disponibilidade, preco_consulta }) => {
    try {
        return await prisma.profissional.update({
            where: { id_profissional: Number(id) },
            data: { crp, especialidade, localizacao, faixa_etaria_atendimento, atendimentos_gratuitos, disponibilidade, preco_consulta },
        });
    } catch (error) {
        console.error("Erro ao atualizar profissional:", error);
        throw new Error("Não foi possível atualizar o profissional.");
    }
};

const deletarProfissional = async (id) => {
    try {
        await prisma.profissional.delete({
            where: { id_profissional: Number(id) },
        });
        return { message: "Profissional deletado com sucesso" };
    } catch (error) {
        console.error("Erro ao deletar profissional:", error);
        throw new Error("Não foi possível deletar o profissional.");
    }
};

module.exports = { listarProfissionais, addProfissional, atualizarProfissional, deletarProfissional };