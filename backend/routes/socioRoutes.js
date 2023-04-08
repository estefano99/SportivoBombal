import express from 'express';
const router = express.Router();

import {
  autenticarSocio,
  obtenerSocios,
  cargarArchivo,
  mostrarPerfil
} from '../controllers/sociosController.js';

router.post('/login', autenticarSocio);

//Devuelve los datos de los socios para mostrar en el perfil
router.get('/perfil/:id', mostrarPerfil);

//Devuelve todos los socios al admin
router.get('/admin/socios', obtenerSocios);

//Ruta donde se hace la carga del archivo socios
router.post('/admin/cargar-archivo', cargarArchivo);

export default router;