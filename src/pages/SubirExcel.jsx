import React, { useState, useEffect } from 'react';
import * as XLSX from 'xlsx';
import { Link } from 'react-router-dom';

const SubirExcel = () => {

  const [socios, setSocios] = useState([]);

  const handleFileUpload = e => {
    const archivo = e.target.files[0];
    const reader = new FileReader();

    reader.onload = e => {
      const workbook = XLSX.read(e.target.result, { type: 'binary' });
      const hoja = workbook.Sheets[workbook.SheetNames[0]];
      const datos = XLSX.utils.sheet_to_json(hoja, { header: 1 });
      const nuevosSocios = [];

      // Recorre los datos de la hoja y crea un objeto para cada socio
      for (let i = 1; i < 19; i++) {
        const [codigo, nombreCompleto, cuotasAdeudadas, dni] = datos[i];
        nuevosSocios.push({ codigo, nombreCompleto, cuotasAdeudadas, dni });
      }

      setSocios(nuevosSocios);
    };

    reader.readAsBinaryString(archivo);
  }

  useEffect(() => {
    if(socios.length) {
      console.log(socios); // Imprime el arreglo de socios en la consola
    };
  }, [socios]);

  return (
    <>
      <div className='bg-slate-700 text-slate-400 text-xl flex flex-col w-2/3 mx-auto p-8 text-center gap-4'>
        <h2>Subir archivo Excel</h2>
        <input type="file" accept=".xls" onChange={handleFileUpload} />
      </div>
      
      <div className='flex flex-wrap gap-4 w-11/12 mx-auto py-5'>
        {socios.map((socio, index) => (
          <div key={index} data-id={socio.codigo} className=' justify-between border border-stone-600 bg-slate-600 rounded-md h-64 p-3 w-1/4 flex-grow flex flex-col cursor-default'>
            <p><strong>Codigo:</strong> {socio.codigo}</p>
            <p><strong>Nombre Completo:</strong> {socio.nombreCompleto}</p>
            <p><strong>Cuotas Adeudadas:</strong> {socio.cuotasAdeudadas}</p>
            <p><strong>DNI:</strong> {socio.dni}</p>
            <Link 
              className='h-10 mt-4 bg-emerald-800 rounded-md text-2xl text-center w-full'
              to={`/perfil-socio/${socio.codigo}`}
            > QR
            </Link>
          </div>
        ))}
      </div>
    </>
  )
}

export default SubirExcel;