import React from 'react'
import mealData from './mealData'

const MealTile = ({meal}) => {
  return (
    <div className='meal-tile'>
        <section className="upper">
            <img src={meal.mealImageUrl} alt="" />
        </section>
        <section className="lower">
            <p className="name">
                {meal.mealName}
            </p>
            <p className="price">
                {meal.mealPrice}
            </p>
            <button className="order-btn">
                Order meal
            </button>
        </section>
    </div>
  )
}

export default MealTile