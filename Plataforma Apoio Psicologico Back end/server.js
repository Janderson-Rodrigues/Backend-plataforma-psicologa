const express = require("express");
const cors = require("cors");

// Importando rotas
const grupoApoioRoutes = require('./src/routes/grupoapoioRoutes');
const anmeneseRoutes = require('./src/routes/anmeneseRoutes')
const avaliacaoRoutes = require('./src/routes/avaliacaoRoutes')
const consultaRoutes = require('./src/routes/consultaRoutes')
const depoimentoRoutes = require('./src/routes/depoimentoRoutes')
const pacienteRoutes = require('./src/routes/pacienteRoutes')
const profissionalRoutes = require('./src/routes/profissionalRoutes')
const usuarioRoutes = require('./src/routes/usuarioRoutes')

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

// usando rotas
app.use('/api/grupos-apoio', grupoApoioRoutes);
app.use('/api/depoimentos', depoimentoRoutes);
app.use('/api/usuarios', usuarioRoutes);
app.use('/api/pacientes', pacienteRoutes);
app.use('/api/profissionais', profissionalRoutes);
app.use('/api/consultas', consultaRoutes);
app.use('/api/anamneses', anmeneseRoutes);
app.use('/api/avaliacoes', avaliacaoRoutes);

app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando na porta http://localhost:${PORT}`);
});
