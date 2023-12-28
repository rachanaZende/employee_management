import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

const EmpolyeeList = () => {
  const [empolyee, setEmpolyee] = useState([])

  async function getempolyeeData() {
    const result = await axios.get("http://localhost:8080/empolyee")
    setEmpolyee(result.data)
  }

  useEffect(() => {
    getempolyeeData()
  },[])
  return (
    <div>
      <table className ="table table-striped">
        <thead>
          <tr>
            <th scope="col">Empolyee Id</th>
            <th scope="col">Empolyee Name</th>
            <th scope="col">Address</th>
            <th scope="col">Contact</th>
            <th scope="col">Gender</th>
            <th scope="col">Role</th>
            <th scope="col">Email Id</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {
            empolyee.map(emp => {
              return (
                <tr key={emp.id}>
                  <td>{emp.empId}</td>
                  <td>{emp.empName}</td>
                  <td>{emp.address}</td>
                  <td>{emp.contact}</td>
                  <td>{emp.gender}</td>
                  <td>{emp.emprole}</td>
                  <td>{emp.email}</td>
                  <td>
                    <NavLink to={`/empolyee/update/${emp.empId}`}><button className='btn btn-warning'>Update</button></NavLink>
                    <NavLink to={`/empolyee/delete/${emp.empId}`}><button className='btn btn-warning'>Delete</button></NavLink>
                  </td>
                </tr>

              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default EmpolyeeList
