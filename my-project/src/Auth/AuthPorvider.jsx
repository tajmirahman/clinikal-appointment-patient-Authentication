import { createContext } from "react";

export const AuthContext=createContext();

const AuthPorvider = ({children}) => {

    const student={
        name: 'himel',
        email: 'himel@gmail.com'
    }


    const authInfo={
        student
    }


    return (
       <AuthContext value={authInfo}>{children}</AuthContext>
    );
};

export default AuthPorvider;