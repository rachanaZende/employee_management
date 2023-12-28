import axios from 'axios'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'

const Update = () => {
    const navigate = useNavigate()
const{register,handleSubmit,setValue}= useForm()
const{empolyeeId} = useParams()

async function fetchData(){
    const result = await axios.get(`http://localhost:8080/empolyee/get/${empolyeeId}`)
   /*  setValue("empolyeeId",result.data.empolyeeId) */
    setValue("empName",result.data.empName)
    setValue("address",result.data.address)
    setValue("contact",result.data.contact)
    setValue("gender",result.data.gender)
    setValue("emprole",result.data.emprole)
    setValue("email",result.data.email)
    
}
useEffect(()=>{
    fetchData()
},[])


 function saveData(data){
 axios.put(`http://localhost:8080/empolyee/update/${empolyeeId}`,data)
 alert("Data Updated")
 navigate('/empolyeelist')
    
 }

  return (
    <div>
       <form onSubmit={handleSubmit(saveData)}>
        <section className="h-100 bg-dark">
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col">
        <div className="card card-registration my-4">
          <div className="row g-0">
            <div className="col-xl-12">
              <div className="card-body text-black">
                <h3 className="mb-2 text-uppercase">Empolyee Registration</h3>

                <div className="row">
                 {/*  <div className="col-md-6 mb-1">
                    <div className="form-outline">
                      <input type="text" id="form3Example1m" className="form-control form-control-lg" {...register('empolyeeId')}/>
                      <label className="form-label" htmlFor="form3Example1m">Empolyee Id</label>
                    </div>
                  </div> */}
                  <div className="col-md-6 mb-1">
                    <div className="form-outline">
                      <input type="text" id="form3Example1n" className="form-control form-control-lg" {...register('empName')}/>
                      <label className="form-label" htmlFor="form3Example1n">Empolyee Name</label>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 mb-1">
                    <div className="form-outline">
                      <input type="text" id="form3Example1m" className="form-control form-control-lg" {...register('address')}/>
                      <label className="form-label" htmlFor="form3Example1m">Address</label>
                    </div>
                  </div>
                  <div className="col-md-6 mb-1">
                    <div className="form-outline">
                      <input type="tel" id="form3Example1n" className="form-control form-control-lg" {...register('contact')}/>
                      <label className="form-label" htmlFor="form3Example1n">Contact</label>
                    </div>
                  </div>
                </div>
                <div className="d-md-flex justify-content-start align-items-center mb-4 py-2">

                  <h6 className="mb-0 me-1">Gender: </h6>

                  <div className="form-check form-check-inline mb-0 me-4">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="femaleGender"
                      value="female" {...register('gender')}/>
                    <label className="form-check-label" htmlFor="femaleGender">Female</label>
                  </div>

                  <div className="form-check form-check-inline mb-0 me-4">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="maleGender"
                      value="male" {...register('gender')}/>
                    <label className="form-check-label" htmlFor="maleGender">Male</label>
                  </div>

                  <div className="form-check form-check-inline mb-0">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="otherGender"
                      value="other" {...register('gender')}/>
                    <label className="form-check-label" htmlFor="otherGender">Other</label>
                  </div>

                </div>
                <div className="row">
                  <div className="col-md-6 mb-1">
                    <div className="form-outline">
                      <input type="text" id="form3Example1m" className="form-control form-control-lg" {...register('emprole')}/>
                      <label className="form-label" htmlFor="form3Example1m">Empolyee Role</label>
                    </div>
                  </div>
                  <div className="col-md-6 mb-1">
                    <div className="form-outline">
                      <input type="email" id="form3Example1n" className="form-control form-control-lg" {...register('email')}/>
                      <label className="form-label" htmlFor="form3Example1n">Email Id</label>
                    </div>
                  </div>
                </div>

                <div className="d-flex justify-content-end pt-3">
                  <button type="reset" className="btn btn-light btn-lg">Reset</button>
                  <button type="submit" className="btn btn-warning btn-lg ms-2">Update</button>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</form>
    </div>
  )
}

export default Update
