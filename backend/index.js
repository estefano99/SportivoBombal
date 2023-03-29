import express from 'express';
import dotenv from 'dotenv';
import conectarDB from './config/db.js';
import socioRoutes from './routes/socioRoutes.js';

const app = express();
app.use(express.json());
dotenv.config();

conectarDB();

app.use("/", socioRoutes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Servidor funcando en el puerto http://localhost:${PORT}`);
});