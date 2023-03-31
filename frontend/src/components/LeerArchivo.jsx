import React, { useState, useEffect } from "react";
import * as XLSX from "xlsx";
import clienteAxios from "../config/axios";
import ListaSociosErroneos from "./ListaSociosErroneos";

function LeerArchivo() {
  const [socios1, setSocios1] = useState([]);
  const [socios2, setSocios2] = useState([]);
  const [estadoBoton, setEstadoBoton] = useState(true);
  const [sociosErroneo, setSociosErroneo] = useState([]); //Guarda los socios que tienen mal ingresado el dni

  const handleFileUpload = (e) => {
    const archivo = e.target.files[0];
    const reader = new FileReader();


    reader.onload = (e) => {
      const workbook = XLSX.read(e.target.result, { type: "binary" });
      const hoja = workbook.Sheets[workbook.SheetNames[0]];
      const datos = XLSX.utils.sheet_to_json(hoja, { header: 1 });
      
      const nuevosSocios1 = [];
      const nuevosSocios2 = [];

      //! DUDA SOBRE ESTO, y si son impares que pasa? toma uno demas o uno menos en la division?
      const primeraMitad = parseInt(datos.length/2);

      // Recorre los datos de la hoja y crea un objeto para cada socio
      for (let i = 1; i < primeraMitad; i++) {
        const [codigo, nombreCompleto, cuotasAdeudadas, dni] = datos[i];

        if (!dni || dni.length > 8 || dni.length < 8) {
          
          const nuevoErroneo = {
            nombreCompleto,
            dni
          }

          setSociosErroneo((prev) =>[...prev,nuevoErroneo]); // agrega un nuevo socio erróneo al arreglo

        } else {

          nuevosSocios1.push({ codigo, nombreCompleto, cuotasAdeudadas, dni });
        }
      };

      for (let i = primeraMitad; i < datos.length; i++) {
        const [codigo, nombreCompleto, cuotasAdeudadas, dni] = datos[i];

        if (!dni || dni.length > 8 || dni.length < 8) {

          const nuevoErroneo = {
            nombreCompleto,
            dni
          }
          
         setSociosErroneo((prev) =>[...prev,nuevoErroneo]); // agrega un nuevo socio erróneo al arreglo

        } else{

          nuevosSocios2.push({ codigo, nombreCompleto, cuotasAdeudadas, dni });
        }
      };

      setSocios1(nuevosSocios1);
      setSocios2(nuevosSocios2);
    };

    reader.readAsBinaryString(archivo);

  };

  const sendData = async (socios) => {

    try {
      const response = await clienteAxios.post('/admin/cargar-archivo', socios);
      console.log('Alalala'); // respuesta del servidor
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmitClick = async () => {

    try {
      const promise1 = sendData(socios1);
      const promise2 = sendData(socios2);
      await Promise.all([promise1, promise2]);
      console.log('Ambas solicitudes POST se completaron exitosamente');
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {

    //Primero pregunta si socios fue cargado, despues si hay socios mal cargados, y depende de si hay (socios erroneos o no) el cambio del Boton.
    if (socios1.length) {
      if (sociosErroneo.length > 0) {
        setEstadoBoton(true)
      }else{
        setEstadoBoton(false)
      }
    }

  }, [socios1,sociosErroneo])


  return (
    <div>
      <h1>Subir archivo excel</h1>
      <input type="file" accept=".xls" onChange={handleFileUpload} />
      <button
        type="submit"
        disabled={estadoBoton}
        onClick={handleSubmitClick}
      >
        Subir Archivo
      </button>
      {
        sociosErroneo && 
        sociosErroneo.map((socio,index) => (
            <ListaSociosErroneos key={index} socio={socio}  />
          ))
      }
    </div>
  );
}

export default LeerArchivo;
