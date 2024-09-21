import {useNavigate } from "react-router-dom";
import { auth } from "../utils/Firebase";
import { useDispatch } from "react-redux";
import { signOut } from "firebase/auth";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { useSelector } from "react-redux";
import { logo,Avatar } from "../utils/Constants";

const Header = () => {

  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const Navigate = useNavigate();


  const handleSignOut=()=> {
  signOut(auth)
    .then(() => {})
    .catch((error) => {
      Navigate("/error");
    });
  };
  

   useEffect(() => {
    const unsubscribe =  onAuthStateChanged(auth, (user) => {
       if (user) {
         const { uid, email, displayName, photoURL } = user;
         dispatch(
           addUser({
             uid: uid,
             email: email,
             displayName: displayName,
             photoURL: photoURL,
           })
         );
         Navigate("/browse");
       } else {
         dispatch(removeUser());
         Navigate("/");
       }
      
      // Unsubscribe when component unmounts
      return () => unsubscribe();
     });
   }, []);
  
  
  
    return (
      <div className=" absolute w-screen bg-gradient-to-b from-black px-8 py-2 z-10 flex justify-between">
        <img
          className="w-48"
          src={logo}
          alt="logo"
        />

        <div className = "flex p-4">
          <img src={Avatar} className = "w-10 h-12" alt = "usericon"/>
          <button onClick = {handleSignOut} className = "bg-red-400 mx-2 px-2 font-bold cursor-pointer">Sign Out</button>
        </div>
      </div>
    );
}

export default Header;