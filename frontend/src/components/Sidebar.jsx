import { NavLink } from "react-router-dom"


function Sidebar() {
  return (
    <>
            <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-body-tertiary sidebar collapse">
                <div className="position-sticky pt-3 sidebar-sticky">
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <NavLink className="nav-link" aria-current="page" to="/admin">
                                <span data-feather="home" className="align-text-bottom"></span>
                                <i className="bi bi-house me-2"></i>
                                Dashboard
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
    </>
  )
}

export default Sidebar