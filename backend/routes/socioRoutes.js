import express from 'express';
const router = express.Router();

import {
  autenticarSocio
} from '../controllers/sociosController.js';

router.post('/login', autenticarSocio);

export default router;