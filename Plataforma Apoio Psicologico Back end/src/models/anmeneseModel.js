const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Listar todas as anamneses
const listarAnamneses = async () => {
    try {
        return await prisma.anamnese.findMany({
            include: {
                paciente: true // Inclui os dados do paciente relacionado
            }
        });
    } catch (error) {
        console.error("Erro ao listar anamneses:", error);
        throw new Error("Não foi possível listar as anamneses.");
    }
};

// Criar uma nova anamnese
const addAnamnese = async (id_paciente, sintomas, uso_medicamentos, objetivo_terapia) => {
    try {
        // Verifica se o paciente existe
        const pacienteExistente = await prisma.paciente.findUnique({
            where: {
                id_paciente: id_paciente
            }
        });

        if (!pacienteExistente) {
            throw new Error("Paciente não encontrado.");
        }

        // Cria a anamnese
        return await prisma.anamnese.create({
            data: {
                id_paciente,
                sintomas,
                uso_medicamentos,
                objetivo_terapia
            },
            include: {
                paciente: true // Inclui os dados do paciente relacionado
            }
        });
    } catch (error) {
        console.error("Erro ao criar anamnese:", error);
        throw new Error("Não foi possível criar a anamnese.");
    }
};

// Atualizar uma anamnese existente
const atualizarAnamnese = async (id, { sintomas, uso_medicamentos, objetivo_terapia }) => {
    try {
        return await prisma.anamnese.update({
            where: {
                id_anamnese: Number(id)
            },
            data: {
                sintomas,
                uso_medicamentos,
                objetivo_terapia
            },
            include: {
                paciente: true // Inclui os dados do paciente relacionado
            }
        });
    } catch (error) {
        console.error("Erro ao atualizar anamnese:", error);
        throw new Error("Não foi possível atualizar a anamnese.");
    }
};

// Deletar uma anamnese
const deletarAnamnese = async (id) => {
    try {
        await prisma.anamnese.delete({
            where: {
                id_anamnese: Number(id)
            }
        });
        return { message: "Anamnese deletada com sucesso." };
    } catch (error) {
        console.error("Erro ao deletar anamnese:", error);
        throw new Error("Não foi possível deletar a anamnese.");
    }
};

module.exports = {
    listarAnamneses,
    addAnamnese,
    atualizarAnamnese,
    deletarAnamnese
};