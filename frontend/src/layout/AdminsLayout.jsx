import {Outlet} from 'react-router-dom';
import Footer from '../components/Footer';

const AdminsLayout = () => {
  return (
    <>
      <h1>Desde AdminsLayout</h1>
      <Outlet />
      <Footer />
    </>
  )
}

export default AdminsLayout