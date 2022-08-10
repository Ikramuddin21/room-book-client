import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () =>{

    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    const auth = getAuth();

    const signInUsingGoogle = () =>{
        const googleProvider = new GoogleAuthProvider();

        return signInWithPopup(auth, googleProvider)
        .finally(() => setLoading(false))
    };

    const logOut = () => {
        signOut(auth)
        .then(() => {
            setUser({});
        })
        setLoading(false);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            if(user) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setLoading(false);
        });

        return unsubscribe;
    }, []);

    return {
        user,
        loading,
        signInUsingGoogle,
        logOut
    }
};

export default useFirebase;