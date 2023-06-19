import React, { useState } from 'react';

const Register = (props) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
      const formValues = {
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
      };
    
      const regsiterdata={
        firstName:formValues.firstName,
        lastName:formValues.lastName,
        email:formValues.email,
        password:formValues.password,
        confirmPassword:formValues.confirmPassword
      };
      const errors = validate(formValues);
      setFormErrors(errors);
      setIsSubmit(true);
      if (Object.keys(errors).length === 0 && password === confirmPassword) {
        fetch(" https://rest-api-bjno.onrender.com/register", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(regsiterdata),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          
          console.error(error);
        });
      } else {
        alert("Password and Confirm Password don't match.");
      }  
};
  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  };
  const handleLastName = (e) => {
    setLastName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const hanldePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.firstName) {
      errors.firstName = 'Firstname is required!';
    }
    if (!values.lastName) {
      errors.lastName = 'Lastname is required!';
    }
    if (!values.email) {
      errors.email = 'Email is required!';
    } else if (!regex.test(values.email)) {
      errors.email = 'This is not a valid email format!';
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    if (!values.confirmPassword) {
      errors.confirmPassword = "Confirm Password is required";
    } else if (values.confirmPassword !== values.password) {
      errors.confirmPassword = "Passwords do not match";
    }
    return errors;
  };

  return (
    <>
      <div className='container'>
        <form onSubmit={handleSubmit}>
          <div className='content1'>
            <div className='form-box2'>
            <div className='title1'>
              <h1>
                Chatapp<span> Registration</span>
              </h1>
              <p>Registration to your account</p>
            </div>
            <div className='input1'>
              <input type='name' className='firstname' placeholder='    FirstName'  value={firstName} onChange={handleFirstName} /><br />
              {formErrors.firstName && <p className='error'>{formErrors.firstName}</p>}
              <input type='name' className='lastname' placeholder='    LastName'  value={lastName} onChange={handleLastName} /><br /><br />
              {formErrors.lasttName && <p className='error'>{formErrors.lastName}</p>}
              <input type='email' className='email' placeholder='    Email' value={email} onChange={handleEmail} /><br /><br />
              {formErrors.email && <p className='error'>{formErrors.email}</p>}
              <input type='password' value={password} className='password' placeholder='    *******' onChange={hanldePassword} /><br /><br/>
              {formErrors.password && <p>{formErrors.password}</p>}
              <input type='password' value={confirmPassword} className='password' placeholder='   ' onChange={handleConfirmPassword} /><br/><br/>
              {formErrors.confirmPassword && <p>{formErrors.confirmPassword}</p>}
            </div>
            <div className='btn1'>
              <button><h3>Registration</h3></button>
              <button type='button' onClick={() => props.onFormSwitch('login')}><h3>Login</h3></button>
            </div>
          </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;