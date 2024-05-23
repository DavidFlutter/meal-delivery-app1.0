import React, { useState } from 'react'
import db from "./firestoreFile";
import { collection, addDoc, setDoc, doc } from 'firebase/firestore';
import BedNumberPhotoLayout from './BedNumberPhotoLayout';

const ConfrimOrderModal = ({setIsModalOpen, cartList2}) => {
    const [customerName, setCustomerName] = useState("");
    const [matricNum, setMatricNumber] = useState("");
    const [bedNumber, setBedNumber] = useState("");
    const [isPhotoModalOpen, setIsPhotoModalOpen] = useState (false);
    
    const handlePlaceOrder = () => {
        if(customerName.trim() === "" ) {
            alert("Name field is required");
            return;
        }
        if(matricNum.trim() === "" ) {
            alert("Matric number field is required");
            return;
        }
        if(bedNumber === "" ) {
            alert("Destination field is required");
            return;
        }
        const collectionRef = collection(db, "orderedMeals");

        cartList2.forEach(meal => {
            const payLoad = {
                mealName: meal.name,
                numberOrdered: meal.amountInCart,
                customerName: customerName,
                destination: bedNumber,
                matricNum: matricNum,
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
        {isPhotoModalOpen && <BedNumberPhotoLayout setIsPhotoModalOpen={setIsPhotoModalOpen}></BedNumberPhotoLayout>}
        <div className="backdrop">
            <div className="tile">
                <section className='top'>
                    <h2>Place order</h2>
                    <button className='close-btn'
                        onClick={handleCloseModal}
                    >x</button>
                </section>
                <section className='inp-sct'>
                    <label htmlFor="matric-number"> Enter your matric numberz</label>
                    <input type="text" name='matric-number'
                        value={matricNum}
                        onChange={(e) => setMatricNumber(e.target.value)}
                    />
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
                    <span className='dest'>Destination: Bed {bedNumber}</span>
                    <label htmlFor="bed-number">Enter bed number</label>
                    <input className='bed-num-inp' type="text" name='bed-number'
                        value={bedNumber}
                        onChange={(e) => setBedNumber(e.target.value)}
                    />
                    <span className='what-bed-text' onClick={() => setIsPhotoModalOpen(true)}>Don't know your bed number?</span>
                </section>

                <button onClick={handlePlaceOrder}>Add</button>
            </div>
        </div>
    </div>
  )
}

export default ConfrimOrderModal