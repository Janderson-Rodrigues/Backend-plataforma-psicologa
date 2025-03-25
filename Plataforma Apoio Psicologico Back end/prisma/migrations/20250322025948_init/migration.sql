-- CreateTable
CREATE TABLE "GrupoApoio" (
    "id_grupo" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT,
    "regiao" TEXT NOT NULL,

    CONSTRAINT "GrupoApoio_pkey" PRIMARY KEY ("id_grupo")
);

-- CreateTable
CREATE TABLE "Depoimento" (
    "id_depoimento" SERIAL NOT NULL,
    "texto" TEXT NOT NULL,
    "data_envio" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Depoimento_pkey" PRIMARY KEY ("id_depoimento")
);

-- CreateTable
CREATE TABLE "Usuario" (
    "id_usuario" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id_usuario")
);

-- CreateTable
CREATE TABLE "Paciente" (
    "id_paciente" SERIAL NOT NULL,
    "id_usuario" INTEGER NOT NULL,
    "data_nascimento" TIMESTAMP(3) NOT NULL,
    "genero" TEXT NOT NULL,

    CONSTRAINT "Paciente_pkey" PRIMARY KEY ("id_paciente")
);

-- CreateTable
CREATE TABLE "Profissional" (
    "id_profissional" SERIAL NOT NULL,
    "id_usuario" INTEGER NOT NULL,
    "crp" TEXT NOT NULL,
    "especialidade" TEXT NOT NULL,
    "localizacao" TEXT NOT NULL,
    "faixa_etaria_atendimento" TEXT NOT NULL,
    "atendimentos_gratuitos" INTEGER NOT NULL,
    "disponibilidade" TEXT NOT NULL,
    "foto" TEXT,
    "preco_consulta" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Profissional_pkey" PRIMARY KEY ("id_profissional")
);

-- CreateTable
CREATE TABLE "Consulta" (
    "id_consulta" SERIAL NOT NULL,
    "id_profissional" INTEGER NOT NULL,
    "id_paciente" INTEGER NOT NULL,
    "data_hora" TIMESTAMP(3) NOT NULL,
    "status" TEXT NOT NULL,

    CONSTRAINT "Consulta_pkey" PRIMARY KEY ("id_consulta")
);

-- CreateTable
CREATE TABLE "Anamnese" (
    "id_anamnese" SERIAL NOT NULL,
    "id_paciente" INTEGER NOT NULL,
    "data" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "sintomas" TEXT NOT NULL,
    "uso_medicamentos" TEXT NOT NULL,
    "objetivo_terapia" TEXT NOT NULL,

    CONSTRAINT "Anamnese_pkey" PRIMARY KEY ("id_anamnese")
);

-- CreateTable
CREATE TABLE "Avaliacao" (
    "id_avaliacao" SERIAL NOT NULL,
    "id_usuario" INTEGER NOT NULL,
    "id_profissional" INTEGER NOT NULL,
    "data_avaliacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "nota" INTEGER NOT NULL,
    "comentario" TEXT,

    CONSTRAINT "Avaliacao_pkey" PRIMARY KEY ("id_avaliacao")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Paciente_id_usuario_key" ON "Paciente"("id_usuario");

-- CreateIndex
CREATE UNIQUE INDEX "Profissional_id_usuario_key" ON "Profissional"("id_usuario");

-- AddForeignKey
ALTER TABLE "Paciente" ADD CONSTRAINT "Paciente_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "Usuario"("id_usuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Profissional" ADD CONSTRAINT "Profissional_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "Usuario"("id_usuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Consulta" ADD CONSTRAINT "Consulta_id_profissional_fkey" FOREIGN KEY ("id_profissional") REFERENCES "Profissional"("id_usuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Consulta" ADD CONSTRAINT "Consulta_id_paciente_fkey" FOREIGN KEY ("id_paciente") REFERENCES "Paciente"("id_usuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Anamnese" ADD CONSTRAINT "Anamnese_id_paciente_fkey" FOREIGN KEY ("id_paciente") REFERENCES "Paciente"("id_usuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Avaliacao" ADD CONSTRAINT "Avaliacao_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "Usuario"("id_usuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Avaliacao" ADD CONSTRAINT "Avaliacao_id_profissional_fkey" FOREIGN KEY ("id_profissional") REFERENCES "Profissional"("id_usuario") ON DELETE RESTRICT ON UPDATE CASCADE;
