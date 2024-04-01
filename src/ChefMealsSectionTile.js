import React from 'react'
import { useState } from 'react';
import db from "./firestoreFile";
import { setDoc, doc } from 'firebase/firestore';

const ChefMealsSectionTile = ({meal}) => {
    const [isChangingPrice, setIsChangingPrice ] = useState(false);
    const [newPrice, setNewPrice] = useState(0);


    const handleToogle = () => {
        setNewPrice(meal.price);
        setIsChangingPrice(!isChangingPrice);
        if(isChangingPrice){
            const docRef = doc(db,"meals", meal.id);
            setDoc(docRef, {
                ...meal, price: newPrice
            });
        }
    }

    const setMealToAvailable = () => {
        const docRef = doc(db, "meals", meal.id);
        setDoc(docRef, {
            ...meal,
            isAvailable: true,
        })
    }

    const setMealToUnAvailable = () => {
        const docRef = doc(db, "meals", meal.id);
        setDoc(docRef, {
            ...meal,
            isAvailable: false,
        })
    }
  return (
    <div className='chef-meal-tile'>
        <img src={meal.imageUrl} alt="" />
        <div className="content">
            <span className='meal-name'>{meal.name}</span>
            <section className='price-sct'>
                {isChangingPrice ?                             
                    <input type="text" value={newPrice} onChange={(e) => setNewPrice(e.target.value)} className='chg-price'/>:
                    <span>{meal.price}</span> 
                }
                <button className='edit-price-btn' onClick={() => handleToogle()}>
                    {isChangingPrice ? "Set new price" : "Change price"}
                </button>
            </section>
            <section className="avail-sct">
                <button className={meal.isAvailable ? `coloured` : ''}
                    onClick={() => setMealToAvailable()}
                >Available</button>
                <button className={meal.isAvailable ? `` : 'coloured'}
                    onClick={() => setMealToUnAvailable()}
                >Unavailable</button>
            </section>
        </div>
    </div>
  )
}

export default ChefMealsSectionTile