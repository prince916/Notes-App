import React from 'react'


const Login = () => {
  
  const handlesubmit = () =>{

  }

  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className='logo'>Messenger App</span>
            <span className='title'>Register</span>
            <form onSubmit={handlesubmit}>
                <input type="email" placeholder='Email'/>
                <input type="password" placeholder='Password'/>
                <input style={{display:"none"}} type="file" id='file'/>
                <button>Sign In</button>
                
            </form>
            {/* <p>You don't have an account? <Link to="/Register">Register</Link></p> */}
        </div>
    </div>
  )
}

export default Login