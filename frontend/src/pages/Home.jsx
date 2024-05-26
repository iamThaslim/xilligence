import { Link } from "react-router-dom"
import CustomerList from "./PatientList"

function Home() {
  return (
  <>
    <div className="container-fluid">
        <div className="row">
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h1 className="h2">Dashboard</h1>
                    <div className="btn-toolbar mb-2 mb-md-0">
                        <div className="btn-group me-2">
                            <Link to="/admin/create-user">
                            <button type="button" className="btn btn-sm btn-outline-secondary">+ New Patient</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <CustomerList />
            </main>
        </div>
    </div>
</>
        )
                }

export default Home