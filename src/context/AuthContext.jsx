import { createContext, useContext, useState,useEffect } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";



const AuthContext = createContext();

export const useAuth = ()=> useContext(AuthContext);

export function AuthProvider ({children}){
    const [currentUser , setCurrentUser] = useState(null)
    const [loading, setLoding] = useState(true)

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (user)=>{
            setCurrentUser(user)
            setLoding(false)
        })
        return unsubscribe
    },[])
  const signup = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
 const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };


    const logout = ()=> signOut(auth)

    return(
        <AuthContext.Provider value={{currentUser, logout, login, signup }}>
            {!loading && children}
        </AuthContext.Provider>
    )
}



