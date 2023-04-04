import Socio from "../models/Socio.js";
import sanitize from "mongo-sanitize";

const autenticarSocio = async (req, res) => {
  //Valida que no haya una inyeccion noSQL
  const apellido = sanitize(req.body.apellido);
  const dni = sanitize(req.body.dni);

  //Consultar si existe el socio en la base de datos
  const socio = await Socio.findOne({ dni });

  //Si el socio no existe muestra un error
  if (!socio) {
    const error = new Error("El socio no existe");
    return res.status(401).json({ msg: error.message });
  };

  return res.send(socio);
};

//El admin quiere consultar todos los socios
const obtenerSocios = async (req, res) => {
  const tipoUsuario = 'socio';

  try {

    const listaSocios = await Socio.find({ tipoUsuario });
    res.send(listaSocios)

  } catch (error) {

    return res.status(401).json({ msg: error.message });
  }
};

//El admin carga el archivo de socios y se actualiza en la base de datos
const cargarArchivo = async (req, res) => {
  const body = req.body;

  for (const socio of body) {
    const { dni, codigo, nombreCompleto, cuotasAdeudadas } = socio;

    try {
      const existeSocio = await Socio.findOne({ dni });

      if (existeSocio) {
        await Socio.updateOne({ dni }, {cuotasAdeudadas });
      } else {
        await Socio.create({ dni, codigo, nombreCompleto, cuotasAdeudadas });
      }
    } catch (error) {
      console.log(`Error: ${error}`);
      return res.status(500).send('Error al cargar el archivo');
    }
  }

  res.send();
};


export {
  autenticarSocio,
  obtenerSocios,
  cargarArchivo
};