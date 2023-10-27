
import { TwitterAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState} from "react";
import auth from "../Components/firebase/firebase.config";


export   const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
   
    const [user,setUser] = useState(null)
    const twitterProvider = new TwitterAuthProvider()
    const userWithTwitter = ( ) => {
        return signInWithPopup(auth , twitterProvider)
    }
    const createUser = (e ,p ) => {
        return createUserWithEmailAndPassword(auth  ,e ,p)
    }
    const loginUser = (e ,p ) => {
        return signInWithEmailAndPassword(auth  ,e ,p)
    }
    const signOutUser = () => {
        return (signOut(auth))
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth , currentUser =>{
            console.log(currentUser)
            setUser(currentUser)

        })
        return ()=>{
            unsubscribe()
        }
    },[])
    
    const authInfo = {userWithTwitter , createUser , loginUser , signOutUser , user}
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;