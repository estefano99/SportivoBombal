import {Outlet} from 'react-router-dom';

const UsuariosLayout = () => {
  return (
    <>
      <h1>Desde UsuariosLayout</h1>
      <Outlet />
    </>
  )
}

export default UsuariosLayout;