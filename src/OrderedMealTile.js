import { doc, setDoc } from 'firebase/firestore'
import React from 'react'
import db from "./firestoreFile" ;
const OrderedMealTile = ({meal}) => {

    const removeFromCart = (meal) => {
        const docRef = doc(db, "meals", meal.id);
        const payLoad = {...meal, amountInCart: 0};
        setDoc(docRef, payLoad);
    }
  return (
    <div className='ordered-meal-tile'>
        <section className="upper">
            <img src={meal.imageUrl} alt="" />
        </section>
        <section className="lower">
            <p className="name">
                {meal.name}
            </p>
            <p className="price">
                <span>${meal.price}</span>
                <span className='amount'>{meal.amountInCart} pack{meal.amountInCart === 1 ? "" : "s"}</span>
            </p>

            <button className="order-btn"
                onClick={() => removeFromCart(meal)}>
                Remove meal
            </button>
        </section>
    </div>
  )
}

export default OrderedMealTile