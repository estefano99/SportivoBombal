import React from "react";

const ListaSociosErroneos = ({ socio }) => {
  console.log(socio)
  return <>
    <li className="p-3 border-t-2 border-zinc-700 flex"> 
      <p className="w-2/3"><span className="font-semibold">Nombre:</span> {socio.nombreCompleto}</p>
      <p><span className="font-semibold">DNI:</span> {socio.dni}</p>
    </li>
  </>
};

export default ListaSociosErroneos;