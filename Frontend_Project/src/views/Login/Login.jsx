import React from 'react'

function Login() {

  const google = ()=>{
    window.open("http://localhost:3001/auth/google/", "_self")
  }

    const github = () => {
    window.open("http://localhost:3001/auth/github/callback", "_self");
};
      const facebook = () => {
    window.open("http://localhost:3001/auth/facebook", "_self");
  
  };
  return (
             <div>

      
      <>
        <div className='button-container'>
            <h3 className='auth-header'>Please authenticate with </h3>
               <ul className='button-list'>
                  <li className='auth-button'><button onClick={google}>Google</button></li>
                  <li className='auth-button'><button onClick={facebook}>Facebook</button></li>
                  <li className='auth-button'><button onClick={github}>Github</button></li>

               </ul>

        </div> 


      </>
    </div>
  )
}

export default Login