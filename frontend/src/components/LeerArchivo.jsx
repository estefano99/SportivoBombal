import React, { useState, useEffect } from "react";
import * as XLSX from "xlsx";

function LeerArchivo() {
  const [socios, setSocios] = useState([]);

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

  useEffect(() => {

    if (socios.length) {
        console.log(socios)
    }
    
  }, [socios])
  

  return (
    <div>
      <h1>Subir archivo excel</h1>
      <input type="file" accept=".xlsx" onChange={handleFileUpload} />
    </div>
  );
}

export default LeerArchivo;
