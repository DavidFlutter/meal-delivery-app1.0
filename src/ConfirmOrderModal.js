import React, { useState } from 'react'
import db from "./firestoreFile";
import { collection, addDoc, setDoc, doc } from 'firebase/firestore';

const ConfrimOrderModal = ({setIsModalOpen, cartList2}) => {
    const [customerName, setCustomerName] = useState("");
    const [destination, setDestination] = useState("");
    
    const handlePlaceOrder = () => {
        const collectionRef = collection(db, "orderedMeals");

        cartList2.forEach(meal => {
            const payLoad = {
                mealName: meal.name,
                numberOrdered: meal.amountInCart,
                customerName: customerName,
                destination: destination,
            }
            addDoc(collectionRef, payLoad);
        });

        cartList2.forEach(meal => {
            const docRef = doc(db, "meals", meal.id)
            setDoc(docRef, {
                ...meal, amountInCart: 0
            })
        });

        setIsModalOpen(false);
    }
        

    const handleCloseModal = () => {
        setIsModalOpen(false);
    }
  return (
    <div className='add-meal-modal'>
        <div className="backdrop">
            <div className="tile">
                <section className='top'>
                    <h2>Add a Meal</h2>
                    <button className='close-btn'
                        onClick={handleCloseModal}
                    >x</button>
                </section>
                <section className='inp-sct'>
                    <label htmlFor="customer-name"> Enter your name</label>
                    <input type="text" name='customer-name'
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                    />
                </section>
                
                <section className='inp-sct'>
                    <h3>Choose destination</h3> 
                    <span>destination: {destination}</span>
                    <button
                        onClick={() => setDestination("male ward")}
                    >Male ward</button>
                    <button
                        onClick={() => setDestination("female ward")}
                    >Female ward</button>
                </section>

                <button onClick={handlePlaceOrder}>Add</button>
            </div>
        </div>
    </div>
  )
}

export default ConfrimOrderModal