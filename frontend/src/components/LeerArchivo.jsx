import React, { useState, useEffect } from "react";
import * as XLSX from "xlsx";
import clienteAxios from "../config/axios";

function LeerArchivo() {
  const [socios, setSocios] = useState([]);
  const [estadoBoton, setEstadoBoton] = useState(true);

  const handleFileUpload = (e) => {
    const archivo = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const workbook = XLSX.read(e.target.result, { type: "binary" });
      const hoja = workbook.Sheets[workbook.SheetNames[0]];
      const datos = XLSX.utils.sheet_to_json(hoja, { header: 1 });
      const nuevosSocios = [];

      // Recorre los datos de la hoja y crea un objeto para cada socio
      for (let i = 1; i < datos.length; i++) {
        const [codigo, nombreCompleto, cuotasAdeudadas, dni] = datos[i];
        nuevosSocios.push({ codigo, nombreCompleto, cuotasAdeudadas, dni });
      };

      setSocios(nuevosSocios);
    };

    reader.readAsBinaryString(archivo);

  };

  const handleSubmitClick = async () => {
    console.log(socios);
  };

  useEffect(() => {

    if (socios.length) {
      setEstadoBoton(false);
    }

  }, [socios])


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
    </div>
  );
}

export default LeerArchivo;
