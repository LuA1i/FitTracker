import React, { useState } from 'react'
import '../Components/CalorieTracker/calorieTracker.css'
const CalorieTracker = () => {
  const [food, setFood] = useState('')
  const [cal, setCalc] = useState('')
  const [foodList, setFoodList] = useState([])

  const handleAddFood = () => {
    if (food && cal) {
      setFoodList([...foodList, { food, cal: Number(cal) }])
      setFood('')
      setCalc('')
    }
  }
  return (
    <div>
      <div className="container">
        <h1>CalorieGoal: </h1>
        <h2>
          Current Calorie Intake:{' '}
          {foodList.reduce((total, item) => total + item.cal, 0)} cal{' '}
        </h2>
        <div className="userinput">
          <label htmlFor=""> Add Food: </label>
          <input
            className="food-item"
            type="text"
            value={food}
            onChange={(e) => setFood(e.target.value)}
          />
          <label htmlFor="">Cal: </label>
          <input
            className="calories"
            type="number"
            value={cal}
            onChange={(e) => setCalc(e.target.value)}
          />
          <button onClick={handleAddFood} className="add-food">
            Add
          </button>
        </div>
        <div className="food-list">
          <h3>Food List:</h3>
          <ul>
            {foodList.map((item, index) => (
              <li key={index}>
                {item.food}: {item.cal} cal
                <button className="delete-food">Delete</button>
                <button className="edit-food">Edit</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default CalorieTracker
