import { Outlet } from 'react-router-dom'
import Header from './Header'
import Sidebar from './Sidebar'

function Layout() {
  return (
    <>
    <Header />
    <Outlet />
    <div className="container-fluid">
        <div className="row">
    <Sidebar />
    </div>
    </div>
    </>
  )
}

export default Layout