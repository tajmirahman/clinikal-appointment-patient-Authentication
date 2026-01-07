import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();

const AuthPorvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // this is for comments section
    const [comments, setComments]=useState(()=>{
        try{
            const storedComments=localStorage.getItem('comments');
            return storedComments ? JSON.parse(storedComments) : [];
        }catch{
            return [] ;
        }    
    });

    // for specific new id create
    const addComments=(comments)=>{
        setComments(prev=>[...prev,comments]);
    }

    useEffect(()=>{
        if(comments){
           return localStorage.setItem('comments', JSON.stringify(comments))
        }
    },[comments]);


    // for appointment 
    const [patient, setPatient] = useState(() => {
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
    },[patient]);

    const googleProvider= new GoogleAuthProvider();

    const googleLogin=()=>{
        return signInWithPopup(auth,googleProvider);
    }


    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logoutUser = () => {
        return signOut(auth)
    }

    const userUpdate=(updateData)=>{
        return updateProfile(auth.currentUser,updateData)
    }

    const passwordReset=(email)=>{
        return sendPasswordResetEmail(auth,email)
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
        userUpdate,
        loginUser,
        googleLogin,
        user,
        setUser,
        logoutUser,
        loading,
        setPatient,
        patient,
        addPatient,
        addComments,
        setComments,
        comments,
        passwordReset
    }


    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthPorvider;