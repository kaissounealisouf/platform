import { useState } from "react";

//Register pages 
const Register=()=>{

  // create the state 
  const [name, setName] =useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [confirm,setConfirm] =useState("")

    const handleSubmit =(event)=>{
    event.preventDefault();
    console.log({name,email,password, confirm})
  // handle the register form
    }

    return(
       <>
      <h1 className="jumbotron text-center bg-primary square">Register</h1>

   <div  className="container col-md-4 offset-md-4 pb-5 ">
    
    <form onSubmit={handleSubmit} className="d-grid gap-2">
    <input type="text" className="form-control mb-4 p-2 " placeholder=" Name"value={name} onChange={(event)=>setName(event.target.value) } required/>
    <input type="email" className="form-control mb-4 p-2 " placeholder="Email" value ={email} onChange ={(event)=>setEmail(event.target.value)} required/>
    <input type="password" className="form-control mb-4 p-2 " id="Password" placeholder="password" value={password} onChange={event=>setPassword(event.target.value)} required/>
    <input type="confirm" className="form-control mb-4 p-2 "id ="ConfirmPassword" placeholder="confirm password" value={confirm} onChange={event=>setConfirm(event.target.value)} required/>
    <button type="submit" className="btn btn-primary">Button</button>
</form>

   </div>

      </>
    )
}

export  default Register;

