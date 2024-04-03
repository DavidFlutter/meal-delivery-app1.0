import React from 'react'
import db from "./firestoreFile";
import { deleteDoc, doc } from 'firebase/firestore';

const OrderedMealsSectionTile = ({orderedMeal}) => {

    const handleCompletedOrder = (id) => {
        const docRef = doc(db, "orderedMeals", id);
        deleteDoc(docRef);
    }
  return (
    <div className='ordered-meals-section-tile'>
        <section>
            <h3>Order details</h3>
            <span>Meal: {orderedMeal.mealName}</span>
            <span>Customer matric number: {orderedMeal.matricNum}</span>
            <span>Customer name: {orderedMeal.customerName}</span>
            <span>destination: Bed {orderedMeal.destination}</span>
            <span>amount: {orderedMeal.numberOrdered}</span>
        </section>
        <button
            onClick={() => handleCompletedOrder(orderedMeal.id)}
        > complete order</button>
    </div>
  )
}

export default OrderedMealsSectionTile