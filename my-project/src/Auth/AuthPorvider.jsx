import { createUserWithEmailAndPassword } from "firebase/auth";
import { createContext } from "react";
import auth from "../Firebase/firebase.config";

export const AuthContext = createContext();

const AuthPorvider = ({ children }) => {

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const loginUser=(email,password)=>{
        return signInWithEmailAndPassword(auth, email,password);
    }


    const authInfo = {
        createUser,
        loginUser
    }


    return (
        <AuthContext value={authInfo}>{children}</AuthContext>
    );
};

export default AuthPorvider;