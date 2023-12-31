import React from 'react'
import calsses from './MealsSummary.module.css'

const MealsSummary = () => {
   return (
      <section className={calsses.summary}>
         <h2>Delicious Food, Delivered To You</h2>
         <p> Choose your favourite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home.</p>
         <p> All our meals are cooked with high-quality ingredents , just-in-time and of course by expericenced chefs!</p>
      </section>
   )
}

export default MealsSummary