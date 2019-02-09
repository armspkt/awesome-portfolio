import React, { useState } from 'react'

function HooksComponent() {
  const [counter, setCounter] = useState(0)
  return <div>{counter}</div>
}

export default HooksComponent
