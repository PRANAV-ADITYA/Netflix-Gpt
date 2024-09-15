import {useNavigate } from "react-router-dom";
import { auth } from "../utils/Firebase";
import { useDispatch } from "react-redux";
import { signOut } from "firebase/auth";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { useSelector } from "react-redux";

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
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="logo"
        />

        <div className = "flex p-4">
          <img src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg" className = "w-10 h-12" alt = "usericon"/>
          <button onClick = {handleSignOut} className = "bg-red-400 mx-2 px-2 font-bold cursor-pointer">Sign Out</button>
        </div>
      </div>
    );
}

export default Header;