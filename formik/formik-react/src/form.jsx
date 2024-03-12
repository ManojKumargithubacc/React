import React from "react";
import { useFormik } from "formik";
import "./App.css"
function Form() {
    const formik=useFormik({
        initialValues:{
            name:"Manoj",
            email:"",
            password:""
        },
        onSubmit: values=>{
          console.log('Data',values)
        },
        validate: values=>{
          let errors={}
          if(!values.name){
            errors.name='Required'
          }
          if(!values.email){
            errors.email='Required'
          }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
            errors.email="invalid e-mail"
          }
          if(!values.password){
            errors.password='Required'
          }
        }
    })
    console.log(formik.errors)
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-control">
        <lable htmlFor="name">Name</lable>
        <input type="text" id="name" name="name" onChange={formik.handleChange} value={formik.values.name} />
        {formik.errors.name?<div className="name">{formik.errors.name}</div>:null}</div>
        <div className="form-control">
        <lable htmlFor="e-mail">E-mail</lable>
        <input type="email" id="email" name="email" onChange={formik.handleChange} value={formik.values.email}/>
        {formik.errors.email?<div className="email">{formik.errors.email}</div>:null}</div>
        <div className="form-control">
        <lable htmlFor="password">Password</lable>
        <input type="text" id="password" name="password" onChange={formik.handleChange} value={formik.values.password}/>
        {formik.errors.password?<div className="password">{formik.errors.password}</div>:null}</div>
      <button type="submit">submit</button>

      </form>
    </div>
  );
}

export default Form;
