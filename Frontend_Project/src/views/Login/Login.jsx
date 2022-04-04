import React from 'react'

function Login() {

  const google = ()=>{
    window.open("http://localhost:5000/auth/google", "_self")
  }
  return (
             <div>

      
      <>
        <div className='button-container'>
            <h3 className='auth-header'>Please authenticate with </h3>
               <ul className='button-list'>
                  <li className='auth-button'><button onClick={google}>Google</button></li>
                  <li className='auth-button'><button>Facebook</button></li>
                  <li className='auth-button'><button>Github</button></li>

               </ul>

        </div> 


      </>
    </div>
  )
}

export default Login