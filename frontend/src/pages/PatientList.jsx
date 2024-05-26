import { Link } from "react-router-dom"
import { useState, useEffect } from "react";
import axios from 'axios';
import { base_url } from "../utils/base_url";
import axiosInstance from "../utils/axios_config";

function PatientList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axiosInstance.get('patient')
    .then(response => {
      setUsers(response.data)
    })
    .catch(error => {
      console.log(error)
    })
  }, [])

  const deleteUser = async (id) => {
    try{
    await axiosInstance.delete('patient/delete/${id}');
    setUsers(users.filter(user => user.id !== id)); 
    alert("User deleted successfully")
    } catch (err) {
      console.error(err);
    }
  }

  return (
  <>
    <h2>Patient List</h2>
    <div className="table-responsive">
      <table className="table table-striped table-sm">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">FirstName</th>
            <th scope="col">LastName</th>
            <th scope="col">Age</th>
            <th scope="col">Admission Date</th>
            <th scope="col">Discharge Date</th>
            <th scope="col">Diagnosis</th>
            <th scope="col" className="text-end">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
          <tr key={index}>
            <td>{user.id}</td>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.age}</td>
            <td>{user.admissionDate}</td>
            <td>{user.dischargeDate}</td>
            <td>{user.diagnosis}</td>
            <td className="text-end">
              {user.username !== "SuperAdmin" && (
              <div className="d-flex flex-row justify-content-end gap-2">
                <Link to={`/admin/edit-user/${user.id}`} type="button" className="btn btn-primary btn-small">
                  <i className="bi bi-pencil"></i>
                </Link>
                <button type="button" className="btn btn-danger btn-small" onClick={() => deleteUser(user.id)}>
                  <i className="bi bi-trash"></i>
                </button>
              </div>
              )}
            </td>
            </tr>
          ))}
          </tbody>
      </table>
    </div>
  </>
          )
                       }

export default PatientList