import React from 'react'
import { doc, setDoc } from 'firebase/firestore';
import db from "./firestoreFile";

const MealTile = ({meal}) => {

    const editItemAmount = (id, newData) => {
        const docRef = doc(db, "meals", id);
        const payLoad = {...newData};

        setDoc(docRef, payLoad);
    }
  return (
    <div className={`meal-tile ${meal.isAvailable ? "" : "is-not-avail"}`}>
        <section className="upper">
            <img src={meal.imageUrl} alt="" />
        </section>
        <section className="lower">
            <p className="name">
                {meal.name}
            </p>
            <p className="price">
                {meal.price}
            </p>
            {meal.amountInCart > 0 ? 
                <section className='change-amount-section'> 
                    <button onClick={() => { editItemAmount(meal.id,{...meal, amountInCart:meal.amountInCart - 1})}}> - </button>
                    <span> {meal.amountInCart} </span>
                    <button onClick={() => { editItemAmount(meal.id,{...meal, amountInCart: meal.amountInCart + 1})}}> + </button>
                </section> :
                meal.isAvailable ? 
                <button className="order-btn"
                    onClick={() => {
                        editItemAmount(meal.id,{...meal, amountInCart: 1});
                    }}
                >
                    Order meal
                </button> :
                <button className="unavail-btn">
                    Unavailable
                </button> 
        }
        </section>
    </div>
  )
}

export default MealTile