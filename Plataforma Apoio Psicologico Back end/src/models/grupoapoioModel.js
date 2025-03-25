const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const listarGruposApoio = async () => {
    try {
        return await prisma.grupoApoio.findMany();
    } catch (error) {
        console.error("Erro ao listar grupos de apoio:", error);
        throw new Error("Não foi possível listar os grupos de apoio.");
    }
};

const addGrupoApoio = async (nome, descricao, regiao) => {
    try {
        return await prisma.grupoApoio.create({
            data: { nome, descricao, regiao },
        });
    } catch (error) {
        console.error("Erro ao criar grupo de apoio:", error);
        throw new Error("Não foi possível criar o grupo de apoio.");
    }
};

const atualizarGrupoApoio = async (id, { nome, descricao, regiao }) => {
    try {
        return await prisma.grupoApoio.update({
            where: { id_grupo: Number(id) },
            data: { nome, descricao },
        });
    } catch (error) {
        console.error("Erro ao atualizar grupo de apoio:", error);
        throw new Error("Não foi possível atualizar o grupo de apoio.");
    }
};

const deletarGrupoApoio = async (id) => {
    try {
        await prisma.grupoApoio.delete({
            where: { id_grupo: Number(id) },
        });
        return { message: "Grupo de apoio deletado com sucesso" };
    } catch (error) {
        console.error("Erro ao deletar grupo de apoio:", error);
        throw new Error("Não foi possível deletar o grupo de apoio.");
    }
};

module.exports = { listarGruposApoio, addGrupoApoio, atualizarGrupoApoio, deletarGrupoApoio };
