import React, {useEffect, useState } from 'react';
import MealTile from './MealTile';
import { collection, onSnapshot } from 'firebase/firestore';
import db from './firestoreFile';

const AllMeal = () => {
    const [meals, setMeals] = useState(null);

    useEffect( () => {
        let collectionRef = collection(db, "meals");
        onSnapshot( collectionRef, (snapshot) => {
            setMeals(snapshot.docs.map(doc => ({...doc.data(), id: doc.id})));
        });
    }, []);
  return (
    <>
        <h2 style={{textAlign: 'center'}}>Avaliable Meals</h2>
        <div className="meals">
            { meals && meals.map(meal=> (
                <MealTile key={meal.id} meal={meal}></MealTile>
            ))}
        </div>
    </>
  )
}

export default AllMeal