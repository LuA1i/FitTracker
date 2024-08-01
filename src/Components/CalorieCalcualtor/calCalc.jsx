import React, { useState } from 'react'
import CalorieTracker from '../../Pages/CalorieTracker'
import CalorieGoal from '../../Pages/CalorieGoal'

const CalCalc = () => {
  const [calories, setCalories] = useState({ maintain: 0, gain: 0, lose: 0 })
  return (
    <div>
      <CalorieGoal calories={calories} setCalories={setCalories} />
    </div>
  )
}

export default CalCalc
