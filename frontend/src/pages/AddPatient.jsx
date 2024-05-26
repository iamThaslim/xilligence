import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axiosInstance from "../utils/axios_config";

function AddPatient() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    diagnosis: "",
    admissionDate: "",
    dischargeDate: "",
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      await axiosInstance.post('patient/create', formData);
      alert("User created successfully!");
      navigate("/admin")
    } catch (err) {
      console.error(err)
    }
  }

  return (
  <>
  <div className="container-fluid">
    <div className="row">
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">Create User</h1>
                <div className="btn-toolbar mb-2 mb-md-0">
                    <div className="btn-group me-2">
                      <Link to="/admin">
                        <button type="button" className="btn btn-sm btn-outline-secondary"> Back </button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="container mt-4">
                <h2>Add New Patient</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="firstName" className="form-label">
                           First Name
                        </label>
                        <input
                        type="text"
                        placeholder="Enter FirstName"
                        className="form-control"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
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
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">
                        Age
                      </label>
                      <input
                      type="number"
                      placeholder="Age"
                      className="form-control"
                      id="age"
                      name="age"
                      value={formData.age}
                      onChange={handleChange}
                      required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">
                        Diagnosis
                      </label>
                      <input
                      type="text"
                      placeholder="eg: fever"
                      className="form-control"
                      id="diagnosis"
                      name="diagnosis"
                      value={formData.diagnosis}
                      onChange={handleChange}
                      required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">
                        Admission Date
                      </label>
                      <input
                      type="date"
                      placeholder="eg: 2024-05-26"
                      className="form-control"
                      id="admissionDate"
                      name="admissionDate"
                      value={formData.admissionDate}
                      onChange={handleChange}
                      required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="phone" className="form-label">
                        Discharge Date
                      </label>
                      <input
                      type="date"
                      placeholder="eg: 2024-05-30"
                      className="form-control"
                      id="dischargeDate"
                      name="dischargeDate"
                      value={formData.dischargeDate}
                      onChange={handleChange}
                      required
                      />
                    </div>
                    <button type="submit" className="btn btn-primary">
                      Add Patient
                    </button>
                </form>
            </div>
        </main>
    </div>
</div>
  </>
        )
                  }

export default AddPatient