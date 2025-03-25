const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const listarUsuarios = async () => {
    try {
        return await prisma.usuario.findMany();
    } catch (error) {
        console.error("Erro ao listar usuários:", error);
        throw new Error("Não foi possível listar os usuários.");
    }
};

const addUsuario = async (nome, email, senha, tipo) => {
    try {
        return await prisma.usuario.create({
            data: { nome, email, senha, tipo },
        });
    } catch (error) {
        console.error("Erro ao criar usuário:", error);
        throw new Error("Não foi possível criar o usuário.");
    }
};

const atualizarUsuario = async (id, { nome, email, senha, tipo }) => {
    try {
        return await prisma.usuario.update({
            where: { id_usuario: Number(id) },
            data: { nome, email, senha, tipo },
        });
    } catch (error) {
        console.error("Erro ao atualizar usuário:", error);
        throw new Error("Não foi possível atualizar o usuário.");
    }
};

const deletarUsuario = async (id) => {
    try {
        await prisma.usuario.delete({
            where: { id_usuario: Number(id) },
        });
        return { message: "Usuário deletado com sucesso" };
    } catch (error) {
        console.error("Erro ao deletar usuário:", error);
        throw new Error("Não foi possível deletar o usuário.");
    }
};

module.exports = { listarUsuarios, addUsuario, atualizarUsuario, deletarUsuario };