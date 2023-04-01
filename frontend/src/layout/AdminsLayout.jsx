import {Outlet} from 'react-router-dom';

const AdminsLayout = () => {
  return (
    <>
      <h1>Desde AdminsLayout</h1>
      <Outlet />
    </>
  )
}

export default AdminsLayout