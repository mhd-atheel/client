import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Edit = () => {
        
    const [inpval,setINP] = useState({
        name:"",
        email:"",
        age:"",
        mobile:"",
        work:"",
        add:"",
        desc:""
})


const setdata = (e) =>{
    console.log(e.target.value);
    const {name,value} =e.target;
    setINP((preval)=>{
        return {
            ...preval,
            [name]:value
        }
    })
}



    return (
        <div className="container">
        <NavLink to="/">
            <button className="btn btn-success mt-3 "> <i className="fas fa-arrow-left"></i> Home2</button>
        </NavLink>
        <form className="mt-5">
            <div className="row">
                <div className="mb-3 col-lg-6 col-md-6 col-12 col-lg-6 col-md-6 col-12">
                    <label for="exampleInputEmail1" className="form-label">
                        Name
                    </label>
                    <input
                        type="text"
                        onChange={setdata}
                        value={inpval.name}
                        name="name"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                    /> 
                </div>
                <div className="mb-3 col-lg-6 col-md-6 col-12 ">
                    <label for="exampleInputPassword1" className="form-label">
                        Email
                    </label>
                    <input
                        type="email"
                        onChange={setdata}
                        value={inpval.email}
                        name="email"
                        className="form-control"
                        id="exampleInputPassword1"
                    />
                </div>
                <div className="mb-3 col-lg-6 col-md-6 col-12">
                    <label for="exampleInputPassword1" className="form-label">
                        Age
                    </label>
                    <input
                        type="text"
                        value={inpval.age}
                        onChange={setdata}
                        name="age"
                        className="form-control"
                        id="exampleInputPassword1"
                    />
                </div>
                <div className="mb-3 col-lg-6 col-md-6 col-12">
                    <label for="exampleInputPassword1" className="form-label">
                        Mobile
                    </label>
                    <input
                        type="number"
                        value={inpval.mobile}
                        name="mobile"
                        onChange={setdata}
                        className="form-control"
                        id="exampleInputPassword1"
                    />
                </div>

                <div className="mb-3 col-lg-6 col-md-6 col-12">
                    <label for="exampleInputPassword1" className="form-label">
                        Work
                    </label>
                    <input
                        type="text"
                        value={inpval.work}
                        name="work"
                        className="form-control"
                        onChange={setdata}
                        id="exampleInputPassword1"
                    />
                </div>
                <div className="mb-3 col-lg-6 col-md-6 col-12">
                    <label for="exampleInputPassword1" className="form-label">
                        Address
                    </label>
                    <input
                        type="text"
                        name="add"
                        value={inpval.add}
                        onChange={setdata}
                        className="form-control"
                        id="exampleInputPassword1"
                    />
                </div>
                <div className="mb-3 col-lg-12 col-md-12 col-12 ">
                    <label for="exampleInputPassword1" className="form-label">
                        Description
                    </label>
                    <textarea name="desc" value={inpval.desc} onChange={setdata} className="form-control" id="" cols="30" rows="10"></textarea>
                </div>
                <button type="submit" className="btn btn-success">
                    Submit
                </button>
            </div>


        </form>
    </div>
    )
}

export default Edit
