import { Outlet, Navigate } from 'react-router-dom';
import Footer from '../components/Footer';
import useAuth from '../hooks/useAuth';

const UsuariosLayout = () => {
  const { auth, cargando } = useAuth();
  console.log(auth);
  console.log(cargando);

  if(cargando) return 'cargando...';

  return (
    <main>
      {/* SI EN EL OBJETO AUTH HAY UNA PROPIEDAD LLAMADA codigoSocio */}
      {Object.keys(auth).length !== 0 ? <Outlet /> : <Navigate to="/" />}
      <Footer />
    </main>
  )
}

export default UsuariosLayout;