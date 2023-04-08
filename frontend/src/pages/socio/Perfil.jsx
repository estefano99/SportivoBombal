const Perfil = () => {
  return (
    <div className="flex flex-col">
      <div className=" h-1/3 bg-indigo-300 p-8 pb-32">
        <p className=" text-4xl font-bold ">Tu CLUB </p>
        <p className=" text-4xl font-bold ">Tu ORIGEN </p>
        <p className=" text-4xl font-bold ">Tu CASA </p>
      </div>
      <div className=" absolute bg-indigo-800 w-1/2 h-48 left-1/4 top-1/4" >

      </div>
      <div className="p-8 pt-44 text-center">
        <p className="text-4xl font-bold mb-20">Pepito perez</p>
        <p className=" bg-yellow-200 shadow-lg border border-yellow-400 h-12 text-xl leading-10 font-bold mb-20" >Mostra tu QR en la entrada</p>
      </div>
    </div>
  )
}

export default Perfil