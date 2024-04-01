import React, { useState } from 'react'
import { useEffect } from 'react';
import db from "./firestoreFile";
import { collection, onSnapshot } from 'firebase/firestore';
import OrderedMealsSectionTile from './OrderedMealsSectionTile';

const OrderedMealsSection = () => {
    const [orderedMeals, setOrderedMeals] = useState([]);
    useEffect( () => {
        let collectionRef = collection(db, "orderedMeals");
        onSnapshot( collectionRef, (snapshot) => {
            setOrderedMeals(snapshot.docs.map(doc => ({...doc.data(), id: doc.id})));
        });
    }, []);
  return (
    <div className="wr">
        <h2>Ordered meals</h2>
        {orderedMeals.length === 0 ?
            <div> 
                <p style={{fontSize: "1.3rem", textAlign: "center"}}> No pending orders</p>
            </div>:
            <div>
                {orderedMeals.map(orderedMeal => <OrderedMealsSectionTile key={orderedMeal.id} orderedMeal={orderedMeal}></OrderedMealsSectionTile>)}
            </div>
        }
    </div>
  )
}

export default OrderedMealsSection