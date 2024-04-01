import { collection, onSnapshot } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import db from "./firestoreFile";
import OrderedMealsSection from './OrderedMealsSection';
import ChefMealsSection from './ChefMealsSection';

const ChefPage = () => {
  const [chefs, setChefs] = useState(null);

  useEffect( () => {
        let collectionRef = collection(db, "chef");
        onSnapshot( collectionRef, (snapshot) => {
            setChefs(snapshot.docs.map(doc => ({...doc.data(), id: doc.id})));
        });
    }, []);

  if(chefs === null) return <div></div>
  return (
    localStorage.getItem("email") === null ||
    localStorage.getItem("password") === null ||
    localStorage.getItem("email") !== chefs[0].email || 
    localStorage.getItem("password") !== chefs[0].password ? 

    <div className='invalid'>
      <h3>Invalid Chef login</h3>
    </div>
   :
     <div>
      <OrderedMealsSection></OrderedMealsSection>
      <ChefMealsSection></ChefMealsSection>
    </div> 

  )
}

export default ChefPage