import React from 'react'
import '../Components/CalorieTracker/calorieTracker.css'
const CalorieTracker = () => {
  return (
    <div>
      <div className="container">
        <h1>CalorieGoal: </h1>
        <h2>Current Calorie Intake: </h2>
        <div className="userinput">
          <label htmlFor=""> Add Food: </label>
          <input className="food-item" type="text" />
          <label htmlFor="">Cal: </label>
          <input className="calories" type="number" />
          <button className="add-food">Add</button>
        </div>
      </div>
    </div>
  )
}

export default CalorieTracker
