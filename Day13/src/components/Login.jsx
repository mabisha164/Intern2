import React, { useEffect, useState } from 'react'

const Login = (props) => {
 
  const initalValues = {email:'',password:''};
  const [formValues,setFormValues]=useState(initalValues);
  const [formError,setFormError]=useState({});
  const[submit,setSubmit]=useState(false);
  // const [registeredData, setRegisteredData] = useState(null);

  
  function handleSubmit(e){
      e.preventDefault();
      setFormError(validate(formValues));
      setSubmit(true)
    
  }

  function handleChange (e) {
    const{name,value}=e.target;
    setFormValues({...formValues, [name]:value})
  };
 
  useEffect(()=>{
    console.log(formError);
    if(Object.keys(formError).length === 0  && submit){
    console.log(formValues);
    }
  },[formError]);
   const validate = (values) =>{
    const errors ={};
    if(!values.email){
      errors.email = "Email is Required";
    }
   if(!values.password){
    errors.password="Password is required";
   }else if(values.password.length >10){
    errors.password="Password cannot exceed more than 10 character";
   }
   return errors;
  };
  // useEffect(() => {
  //   fetch("https://rest-api-bjno.onrender.com/register",{
  //   method: 'POST',
  // })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setRegisteredData(data);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }, []);
   return(
    <>
   
    <div className='main'>
  
      
    <form onSubmit={handleSubmit}>
    <div className='container1'>
    {Object.keys(formError).length === 0 && submit?(<div className='ui message success'>Signed in successfully</div>):(
      <pre></pre>
    ) }
    <div className='form-box'>
      <div className='text'>
       <h4>Chatapp</h4>
         <p>Login to your account</p>
      </div>
     <div className='input'>
       <input type='email' name="email" className='email' placeholder='       Email'onChange={handleChange} values={formValues.email} /><br/><br/><span>{formError.email}</span><br/>
       <input type='password' name="password" className="password"placeholder='   *******' onChange={handleChange} values={formValues.password} /><br/><br/><span>{formError.password}</span>

      </div>
      <div className='remember'>
         <input type='checkbox' className='check'></input> Remember me
         <p><a href='#'>Forget password?</a></p>
      </div>
      <div className='btn'>
        <button className='login' >Login</button>
        <p>Don't have an account        <button type='button' onClick={()=> props.onFormSwitch('register')}> Sign Up</button></p>
      </div>
      </div>
      </div>
    {/* </div> */}
    
</form>
  </div>
  
  </>
 )}

export default Login
