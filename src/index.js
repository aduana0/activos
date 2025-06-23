import express from "express";
import { PORT } from "./config.js";

import otrosRoutes from "./routes/otros.routes.js";
import mantenimientoRoutes from "./routes/mantenimiento.routes.js";
import infraestructuraRoutes from "./routes/infraestructura.routes.js";
import grupoRoutes from './routes/grupos.routes.js';
import encargadoRoutes from './routes/encargado.routes.js';
import usersRoutes from './routes/users.routes.js';



import tipoRoutes from './routes/tipo.routes.js';
import cors from 'cors';

import dotenv from "dotenv";
dotenv.config();

import morgan from "morgan";

const app = express();

app.use(morgan("dev"));
app.use(express.json());


app.use(cors()); 


app.use(cors({
  origin: 'http://localhost:5173', 
  credentials: true 
}));


// aqui van mis rutas

app.use(otrosRoutes);
app.use(mantenimientoRoutes);
app.use(infraestructuraRoutes);
app.use(grupoRoutes);
app.use(encargadoRoutes);
app.use(tipoRoutes);
app.use(usersRoutes);


app.listen(PORT);

console.log("SERVER ON PORT ", PORT);
