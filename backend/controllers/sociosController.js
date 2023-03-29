import Socio from "../models/Socio.js";

const autenticarSocio = async (req, res) => {
  const { nombreCompleto, dni } = req.body;

  //Consultar si existe el socio en la base de datos
  const socio = await Socio.findOne({ nombreCompleto });

  //Si el socio no existe muestra un error
  if (!socio) {
    const error = new Error("El socio no existe");
    return res.status(401).json({ msg: error.message });
  };

  //Validar el password(dni) ingresado
  if(socio.dni === dni) {
    return res.send(socio);
  } else {
    const error = new Error("El DNI es incorrecto");
    return res.status(401).json({ msg: error.message });
  };
};

//El admin quiere consultar todos los socios
const obtenerSocios = async (req,res) => {

  try {

    const listaSocios = await Socio.find({});
    res.send(listaSocios)

  } catch (error) {

    return res.status(401).json({ msg: error.message });
  }
}

export {
  autenticarSocio,
  obtenerSocios
};