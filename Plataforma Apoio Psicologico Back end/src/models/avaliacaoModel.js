const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const listarAvaliacoes = async () => {
    try {
        return await prisma.avaliacao.findMany({
            include: { usuario: true, profissional: true },
        });
    } catch (error) {
        console.error("Erro ao listar avaliações:", error);
        throw new Error("Não foi possível listar as avaliações.");
    }
};

const addAvaliacao = async (id_usuario, id_profissional, nota, comentario) => {
    try {
        return await prisma.avaliacao.create({
            data: { id_usuario, id_profissional, nota, comentario },
        });
    } catch (error) {
        console.error("Erro ao criar avaliação:", error);
        throw new Error("Não foi possível criar a avaliação.");
    }
};

const atualizarAvaliacao = async (id, { nota, comentario }) => {
    try {
        return await prisma.avaliacao.update({
            where: { id_avaliacao: Number(id) },
            data: { nota, comentario },
        });
    } catch (error) {
        console.error("Erro ao atualizar avaliação:", error);
        throw new Error("Não foi possível atualizar a avaliação.");
    }
};

const deletarAvaliacao = async (id) => {
    try {
        await prisma.avaliacao.delete({
            where: { id_avaliacao: Number(id) },
        });
        return { message: "Avaliação deletada com sucesso" };
    } catch (error) {
        console.error("Erro ao deletar avaliação:", error);
        throw new Error("Não foi possível deletar a avaliação.");
    }
};

module.exports = { listarAvaliacoes, addAvaliacao, atualizarAvaliacao, deletarAvaliacao };