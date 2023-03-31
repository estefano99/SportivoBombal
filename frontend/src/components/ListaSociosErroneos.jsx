import React from "react";

const ListaSociosErroneos = ({socio}) => {
  console.log(socio)
  return <div>
    <p>Nombre: {socio.nombreCompleto} - DNI: {socio.dni}</p>
  </div>;
};

export default ListaSociosErroneos;
