
import { initializeApp } from "firebase/app";
import {getAuth,  
        createUserWithEmailAndPassword, 
        signInWithEmailAndPassword,
        signOut} from 'firebase/auth';
import {getFirestore,addDoc, collection} from 'firebase/firestore';
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyCg0tpvptfO5OOEkeRoxfRKOiGn3Aj5XAQ",
  authDomain: "netflix-clone-c3878.firebaseapp.com",
  projectId: "netflix-clone-c3878",
  storageBucket: "netflix-clone-c3878.appspot.com",
  messagingSenderId: "1017967345493",
  appId: "1:1017967345493:web:f37ad03930ad8574f6b9dc"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email,password)=>{
    try {
       const res= await createUserWithEmailAndPassword(auth, email,password)
       const user = res.user;
       await addDoc(collection(db,"user"), {
                                uid:user.uid,
                                name,
                                authProvider:"local",
                                email,
                            });
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(' '));
    }
}

const login = async (email,password)=>{
    try {
        await signInWithEmailAndPassword(auth,email,password)
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(' '));
    }
}

const logout= async ()=>{
    signOut(auth);
}

export {auth,db,login, signup, logout}

