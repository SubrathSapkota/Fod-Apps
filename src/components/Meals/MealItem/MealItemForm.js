import React from 'react'
import classes from './MealItemForm.module.css'
import Input from '../../UI/Input';

const MealItemForm = (props) => {
   const submitHandler = (event) => {
      event.preventDefault();
   };

   return (
      <form className={classes.form} onSubmit={submitHandler}>
         <Input
            label="Amount"
            input={{
               id: 'amount',
               type: 'number',
               min: '1',
               max: '5',
               step: '1',
               defaultValue: '1',
            }} />
         <button className={classes.button} > + ADD</button>
      </form>
   )
}

export default MealItemForm; 