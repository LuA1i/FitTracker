import React from 'react'

const CalorieGoal = () => {
  return (
    <div className="container">
      <h1>Calorie Goal</h1>
      <div className="input-container">
        <label>
          Age (15+):
          <input type="number" />
        </label>
      </div>
      <div className="input-container">
        <label htmlFor="Gender">
          Gender:
          <select id="gender-selection">
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </label>
      </div>
      <div className="input-container">
        <label>
          Height (cm):
          <input type="number" />
        </label>
      </div>
      <div className="input-container">
        <label>
          Weight (kg):
          <input type="number" />
        </label>
      </div>
      <div className="input-container">
        <label>
          Activity Level:
          <select>
            <option value="level_1">Sedentary</option>
            <option value="level_2">Lightly active</option>
            <option value="level_3">Moderately active</option>
            <option value="level_4">Very active</option>
            <option value="level_5">Extra active</option>
          </select>
        </label>
      </div>
      <button>Calculate</button>
      <div>
        <h2>Calorie Goals</h2>
        <p>Maintain weight: calories/day</p>
        <p>Gain weight: calories/day</p>
        <p>Lose weight: calories/day</p>
      </div>
    </div>
  )
}

export default CalorieGoal
