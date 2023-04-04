import { useRef, useState } from 'react';
import Alerta from '../components/Alerta';
import clienteAxios from "../config/axios";

const Login = () => {
  const [alerta, setAlerta] = useState({});

  const apellido = useRef();
  const dni = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    //Validacion de Apellido y DNI
    if (apellido.current.value === '' || dni.current.value === '') {
      return setAlerta({ msg: "Por favor, rellena todos los campos", error: true });
    };

    setAlerta({});

    //Manda la info al Back
    try {
      const url = "/login"

      const data = {
        apellido: apellido.current.value,
        dni: dni.current.value
      }
      
      const response = await clienteAxios.post(url, data);
      console.log("Navegacion hacia la pagina de QR")
    } catch (error) {
      setAlerta({
        msg: error.response.data.msg,
        error:true
      })
      console.log(error)
    }
    
  }

  const { msg } = alerta;


  return (
    <>
      <div className="my-16 w-5/6 mx-auto">
        <h2 className="text-4xl font-bold text-center">Inicia sesion para ver tu cuenta de SOCIO</h2>
      </div>

      <div className="mt-6 w-5/6 mx-auto">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="apellido">
              Apellido
            </label>
            <input ref={apellido} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="apellido" type="text" placeholder="Ingresa tu Apellido" />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="dni">
              DNI
            </label>
            <input ref={dni} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="dni" type="tel" placeholder="Ingresa tu DNI" />
          </div>

          {msg && <Alerta
            alerta={alerta}
          />}

          <div className="flex items-center justify-between">
            <button className="w-full bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
              Iniciar Sesión
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Login;