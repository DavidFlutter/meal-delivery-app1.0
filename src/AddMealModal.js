import React, { useState } from 'react'
import db from "./firestoreFile";
import { collection, addDoc } from 'firebase/firestore';

const AddMealModal = ({setIsModalOpen}) => {
    const [newMealName, setNewMealName] = useState("");
    const [newMealPrice, setNewMealPrice] = useState(0);
    const [newMealUrl, setNewMealUrl] = useState("https://images.unsplash.com/photo-1587334207810-4915c4e40c67?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGxhdGV8ZW58MHx8MHx8fDA%3D");
    const handleAddMeal = () => {
        if(newMealName === "" || newMealPrice === "") {
            alert("Meal name and meal price fields are required");
            return;
        }
        const collectionRef = collection(db, "meals");
        const payLoad = {
            imageUrl: newMealUrl,
            isAvailable: true,
            name: newMealName,
            price: Number(newMealPrice),
            amountInCart: 0,
        };
        addDoc(collectionRef, payLoad);
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
                    <label htmlFor="name"> Meal name</label>
                    <input type="text" name='name'
                        value={newMealName}
                        onChange={(e) => setNewMealName(e.target.value)}
                    />
                </section>
                <section className='inp-sct'>
                    <label htmlFor="price"> Meal price</label>
                    <input type="text" name='price' 
                        value={newMealPrice}
                        onChange={(e) => setNewMealPrice(e.target.value)}
                    />
                </section>
                <section className='inp-sct'>
                    <label htmlFor="img-url"> Meal image</label>
                    <input type="text" name='img-url' 
                        value={newMealUrl}
                        onChange={(e) => setNewMealUrl(e.target.value)}
                        placeholder='insert image url if you have one'
                    />
                </section>

                <button onClick={handleAddMeal}>Add</button>
            </div>
        </div>
    </div>
  )
}

export default AddMealModal