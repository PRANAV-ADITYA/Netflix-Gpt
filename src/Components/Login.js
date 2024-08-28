import { useState } from 'react';
import Header from './Header';

const Login = () => {

   const [SignInVar,setSignInVar]= useState(true)

    const handleSignUp = () => {
        setSignInVar(!SignInVar);
    }

    return (
      <div>
        <Header />

        <div className="absolute">
          <img
            src="https://assets.nflxext.com/ffe/siteui/vlv3/36a4db5b-dec2-458a-a1c0-662fa60e7473/1115a02b-3062-4dcc-aae0-94028a0dcdff/IN-en-20240820-TRIFECTA-perspective_WEB_eeff8a6e-0384-4791-a703-31368aeac39f_large.jpg"
            alt=""
          />
        </div>

        <form className="w-3/12 absolute p-12 bg-black mt-36  right-0 left-0 mx-auto text-white bg-opacity-80">
          <h1 className="font-bold text-3xl py-4 mx-1">
            {SignInVar === true ? "Sign In" : "Sign Up"}
                </h1>
                
        {!SignInVar&&<input
            type="text"
            placeholder="Full Name"
            className="bg-white p-4 my-4 w-full rounded-lg bg-gray-700"
                />}
                

          <input
            type="email"
            placeholder="Email or mobile Number"
            className="bg-white p-4 my-4 w-full rounded-lg bg-gray-700"
          />

          

          <input
            type="password"
            placeholder="Password"
            className="p-4 my-4 w-full rounded-lg  bg-gray-700"
                />
                
          <button className="border border-black border-solid px-2 rounded-lg p-4 my-6 bg-red-600 w-full">
            {SignInVar === true ? "Sign In" : "Sign Up"}
          </button>

          <p className="py-4 cursor-pointer" onClick={handleSignUp}>
            {SignInVar === true
              ? "New to Netflix? Sign Up Now "
              : "Already Registered ? Sign In Now."}
          </p>
        </form>
      </div>
    );
}

export default Login;