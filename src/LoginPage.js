import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import db from "./firestoreFile";

const LoginPage = () => {    
    const [chefs, setChefs] = useState(null);

    useEffect( () => {
        let collectionRef = collection(db, "chef");
        onSnapshot( collectionRef, (snapshot) => {
            setChefs(snapshot.docs.map(doc => ({...doc.data(), id: doc.id})));
        });
    }, []);

    const [email, setEmail] = useState("");
    const [pasword, setPassword] = useState("");
    const navigate = useNavigate();
    const handleLogin = () => {
        if(chefs === null) return;
        if(email === chefs[0].email && pasword === chefs[0].password){
            navigate("/chefpage");
            localStorage.setItem("email", email);
            localStorage.setItem("password", pasword);            
            setEmail("");
            setPassword("");
        }
        else{
            alert("Invalid username and/or password");
        }

        setEmail("");
        setPassword("")
    }
  return (
    <div className='LoginPage'>
        <div className="tile">
            <h2>
                Login
            </h2>
            <section className="input-area">
                <label htmlFor="email">
                    Email
                </label>
                <input type="email" name="email" id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </section>

            <section className="input-area">
                <label htmlFor="password">
                    Password
                </label>
                <input type="password" name="password" id="password" 
                    value={[pasword]}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </section>

            <button className='chef-login-btn'
                onClick={() => handleLogin()}
            >
                Login
            </button>
        </div>
    </div>
  )
}

export default LoginPage