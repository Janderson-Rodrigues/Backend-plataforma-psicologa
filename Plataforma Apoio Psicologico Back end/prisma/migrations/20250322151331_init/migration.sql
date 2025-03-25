-- DropForeignKey
ALTER TABLE "Anamnese" DROP CONSTRAINT "Anamnese_id_paciente_fkey";

-- AddForeignKey
ALTER TABLE "Anamnese" ADD CONSTRAINT "Anamnese_id_paciente_fkey" FOREIGN KEY ("id_paciente") REFERENCES "Paciente"("id_paciente") ON DELETE RESTRICT ON UPDATE CASCADE;
