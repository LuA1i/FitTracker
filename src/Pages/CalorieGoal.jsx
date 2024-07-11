import React, { useState } from 'react'

const CalorieGoal = () => {
  const [height, useHeight] = useState(0)
  const [weight, useWeight] = useState(0)
  const [age, useAge] = useState('')
  const [gender, useGender] = useState('')
  const [activityLevel, setAcitivityLevel] = useState('level_1')
  const [cal, setCal] = useState({ maintain: 0, gain: 0, lose: 0 })

  const handleCalc = () => {
    let bmr = 0
    if (gender === 'male') {
      bmr = 10 * weight + 6.25 * height - 5 * age + 5
    } else {
      bmr = 10 * weight + 6.25 * height - 5 * age - 161
    }

    let acitivtyRate = 1.2

    switch (activityLevel) {
      case 'level_2':
        acitivtyRate = 1.375
        break
      case 'level_3':
        acitivtyRate = 1.55
        break
      case 'level_4':
        acitivtyRate = 1.725
        break
      case 'level_5':
        acitivtyRate = 1.9
      default:
        acitivtyRate = 1.2
    }

    const maintanenceCalories = bmr * acitivtyRate

    setCal({
      maintain: Math.round(maintanenceCalories),
      gain: Math.round(maintanenceCalories + 500),
      lose: Math.round(maintanenceCalories - 500),
    })
  }
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
