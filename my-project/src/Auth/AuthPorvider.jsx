import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();

const AuthPorvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const [patient, setPatient] = useState(() => {
        // const storedPatient = localStorage.getItem('paitent');
        // return storedPatient ? JSON.parse(storedPatient) : [];
        try {
            const storedPatient = localStorage.getItem("patient");
            return storedPatient ? JSON.parse(storedPatient) : [];
        } catch {
            return null;
        }
    });

    const addPatient = (patient) => {
        setPatient(prev => [...prev, patient]);
    };

    useEffect(()=>{
        if(patient){
            localStorage.setItem('patient', JSON.stringify(patient))
        }
    },[patient])

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logoutUser = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        })
        return () => {
            unsubscribe();
        }
    }, [])

    console.log(user);


    const authInfo = {
        createUser,
        loginUser,
        user,
        setUser,
        logoutUser,
        loading,
        setPatient,
        patient,
        addPatient
    }


    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthPorvider;