import express from 'express';
const router = express.Router();

import {
  autenticarSocio,
  obtenerSocios
} from '../controllers/sociosController.js';

router.post('/login', autenticarSocio);

//Devuelve todos los socios al admin
router.get('/socios',obtenerSocios)

export default router;