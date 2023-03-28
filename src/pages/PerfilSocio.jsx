import { useParams } from 'react-router-dom';
import QRCode from 'qrcode.react';

const PerfilSocio = () => {

  const params = useParams();
  const { codigo } = params;

  const qrData = `Numero de socio: ${codigo}`;

  return (
    <>
      <h1 className=" text-slate-300 text-3xl text-center font-bold">#SoyCanario - Tu PERFIL DE SOCIO!</h1>

      <div className='my-5 w-1/2 rounded-lg flex flex-col bg-slate-600 p-5 gap-5 text-center'>
        <p className='text-2xl font-medium'>Numero de socio: {codigo}</p>
        <QRCode className='mx-auto' size={256} level="H" value={qrData} />
      </div>
    </>
  )
}
export default PerfilSocio;