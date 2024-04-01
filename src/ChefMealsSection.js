import React, { useState } from 'react'
import { useEffect } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import db from "./firestoreFile";
import ChefMealsSectionTile from './ChefMealsSectionTile';
import AddMealModal from './AddMealModal';

const ChefMealSection = () => {
    const [allMeals, setAllMeals] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    useEffect( () => {
        let collectionRef = collection(db, "meals");
        onSnapshot( collectionRef, (snapshot) => {
            setAllMeals(snapshot.docs.map(doc => ({...doc.data(), id: doc.id})));
        });
    }, []);
  return (
    <div className='chef-meals'>
        <h2 style={{marginTop: "5rem"}}>All meals</h2>
        <div className='chef-meals-line'>
            {allMeals.map(meal =>
                <ChefMealsSectionTile key={meal.id} meal={meal}></ChefMealsSectionTile>
            )}
        </div>
        <button className='add-meal-btn'
            onClick={() => setIsModalOpen(true)}
        > Add Meal</button>
        {isModalOpen && <AddMealModal setIsModalOpen={setIsModalOpen} ></AddMealModal>}
    </div>
  )
}

export default ChefMealSection
