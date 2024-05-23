import React, { useEffect, useState } from 'react';
import OrderedMealTile from './OrderedMealTile';
import {  collection, onSnapshot } from 'firebase/firestore';
import db from "./firestoreFile";
import ConfrimOrderModal from './ConfirmOrderModal';

const Cart = () => { 
    const [cartList2, setCartList2] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const collectionRef = collection(db, "meals");
        onSnapshot(collectionRef, (snapshot) => {
            setCartList2(snapshot.docs.map(doc => ({...doc.data(), id:doc.id})).filter(meal => meal.amountInCart > 0));
        } );
    }, []);

    const placeOrder = () => {
        setIsModalOpen(true);       
    }
    
  return (
    <div className='cart'>
        <h2>Cart</h2>
        <div className="meals">
            {cartList2 && cartList2.length === 0 ?
                <div className='cart-text'>
                    <p>No meals in cart</p>
                </div>:
                cartList2 && cartList2.map(meal=> (
                    <OrderedMealTile key={meal.id} meal={meal}></OrderedMealTile>
                ))
            }
        </div>
        {cartList2 && cartList2.length > 0 && 
            <button className="submit-btn" onClick={() => placeOrder()}>
                Place order
            </button>}

        {isModalOpen && <ConfrimOrderModal setIsModalOpen={setIsModalOpen} cartList2={cartList2}></ConfrimOrderModal>}            
    </div>
  )
}

export default Cart