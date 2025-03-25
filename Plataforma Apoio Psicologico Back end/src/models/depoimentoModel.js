const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const listarDepoimentos = async () => {
    try {
        return await prisma.depoimento.findMany();
    } catch (error) {
        console.error("Erro ao listar depoimentos:", error);
        throw new Error("Não foi possível listar os depoimentos.");
    }
};

const addDepoimento = async (texto) => {
    try {
        return await prisma.depoimento.create({
            data: { texto },
        });
    } catch (error) {
        console.error("Erro ao criar depoimento:", error);
        throw new Error("Não foi possível criar o depoimento.");
    }
};

const atualizarDepoimento = async (id, { texto }) => {
    try {
        return await prisma.depoimento.update({
            where: { id_depoimento: Number(id) },
            data: { texto },
        });
    } catch (error) {
        console.error("Erro ao atualizar depoimento:", error);
        throw new Error("Não foi possível atualizar o depoimento.");
    }
};

const deletarDepoimento = async (id) => {
    try {
        await prisma.depoimento.delete({
            where: { id_depoimento: Number(id) },
        });
        return { message: "Depoimento deletado com sucesso" };
    } catch (error) {
        console.error("Erro ao deletar depoimento:", error);
        throw new Error("Não foi possível deletar o depoimento.");
    }
};

module.exports = { listarDepoimentos, addDepoimento, atualizarDepoimento, deletarDepoimento };