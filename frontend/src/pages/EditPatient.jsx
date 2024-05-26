import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom"
import { base_url } from "../utils/base_url";
import axiosInstance from "../utils/axios_config";

function EditPatient() {
  const [user, setUser] = useState({})
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axiosInstance.get(`patient/${params.id}`)
        const { data } = response;
        data.admissionDate = new Date(data.admissionDate).toISOString().split('T')[0];
        data.dischargeDate = new Date(data.dischargeDate).toISOString().split('T')[0];
        setUser(data);
      } catch (error) {
        console.error(error)
      }
    }
    fetchUser();
  }, [params.id])


  const handleUpdate = async (event) => {
    event.preventDefault();
    try{
      await axiosInstance.put(`patient/${params.id}`, user);
      alert('User update successfull')
      navigate('/admin')
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div className="container-fluid">
    <div className="row">
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">Edit Patient</h1>
                <div className="btn-toolbar mb-2 mb-md-0">
                    <div className="btn-group me-2">
                      <Link to="/admin">
                        <button type="button" className="btn btn-sm btn-outline-secondary"> Back </button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="container mt-4">
                <h2>Update Patient</h2>
                <form onSubmit={handleUpdate}>
                    <div className="mb-3">
                        <label htmlFor="firstName" className="form-label">
                            First Name
                        </label>
                        <input
                        type="text"
                        value={user.firstName}
                        placeholder="Enter First Name"
                        className="form-control"
                        id="firstName"
                        name="firstName"
                        onChange={(event) => setUser({ ...user, firstName: event.target.value })}
                        required
                        />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="lastName" className="form-label">
                        Last Name
                      </label>
                      <input
                      type="text"
                      placeholder="Last Name"
                      className="form-control"
                      id="lastName"
                      name="lastName"
                      value={user.lastName}
                      onChange={(event) => setUser({ ...user, lastName: event.target.value })}
                      required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="age" className="form-label">
                        Age
                      </label>
                      <input
                      type="age"
                      placeholder="eg: 27"
                      className="form-control"
                      id="age"
                      name="age"
                      value={user.age}
                      onChange={(event) => setUser({ ...user, age: event.target.value })}
                      required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="diagnosis" className="form-label">
                        Diagnosis
                      </label>
                      <input
                      type="text"
                      placeholder="eg: fever"
                      className="form-control"
                      id="diagnosis"
                      name="diagnosis"
                      value={user.diagnosis}
                      onChange={(event) => setUser({ ...user, diagnosis: event.target.value })}
                      required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="admissionDate" className="form-label">
                        Admission Date
                      </label>
                      <input
                      type="date"
                      placeholder="eg: 2024-05-23"
                      className="form-control"
                      id="admissionDate"
                      name="admissionDate"
                      value={user.admissionDate}
                      onChange={(event) => setUser({ ...user, admissionDate: event.target.value })}
                      required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="admissionDate" className="form-label">
                        Discharge Date
                      </label>
                      <input
                      type="date"
                      placeholder="eg: 1234567890"
                      className="form-control"
                      id="dischargeDate"
                      name="dischargeDate"
                      value={user.dischargeDate}
                      onChange={(event) => setUser({ ...user, dischargeDateDate: event.target.value })}
                      required
                      />
                    </div>
                    <button type="submit" className="btn btn-primary">
                      Update Patient
                    </button>
                </form>
            </div>
    </main>
    </div>
</div>
  )
}

export default EditPatient