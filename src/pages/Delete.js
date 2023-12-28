import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom'

const Delete = () => {
    const{empolyeeId}= useParams()
    const navigate = useNavigate()
    const [empolyee,setEmpolyee]= useState([])

    async function fetchData(){
        const result = await axios.get(`http://localhost:8080/empolyee/get/${empolyeeId}`)
        setEmpolyee(result.data)
    }
    useEffect(()=>{
        fetchData()
    },[])
    
    function deletedata(){
        axios.delete(` http://localhost:8080/empolyee/delete/${empolyeeId}`)
        alert("data deleted")
        navigate('/empolyeelist')
    }

  return (
    <div>
      <h1>Delete Data</h1>
      <form onSubmit={()=>deletedata()}>
      <h2 className='text-danger'>Do you really want to delete data...??</h2>
      <span className='text-danger'>{empolyee.empName} - {empolyee.empId}</span>
      <input type='submit' value='yes' className='btn btn-outline-danger'/>
     <NavLink to={'/empolyeelist'}><button className='btn btn-outline-warning'>NO</button></NavLink>
      </form>
    </div>
  )
}

export default Delete
