import { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>{props.text}</button>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allVotes, setAllVotes] = useState(0)

  const handleGoodClick = () => {
    return (
          setAllVotes(allVotes + 1),
          setGood(good + 1)
        )
  }

  const handleNeutralClick = () => {
    return (
          setAllVotes(allVotes + 1),
          setNeutral(neutral + 1)
        )
  }

  const handleBadClick = () => {
    return (
          setAllVotes(allVotes + 1),
          setBad(bad + 1)
        )
  }



  return (
    <div>
      <h2>give feedback</h2>
      <Button handleClick={handleGoodClick} text={'good'}/>
      <Button handleClick={handleNeutralClick} text={'neutral'}/>
      <Button handleClick={handleBadClick} text={'bad'}/>
      <h3>Statistics</h3>
      <p>good: {good}</p>
      <p>neutral: {neutral}</p>
      <p>bad: {bad}</p>
      <p>all: {allVotes}</p>
      <p>average: {((good*1) + (bad*(-1)) ) / allVotes}</p>
      <p>positive: {good / allVotes}</p>
    </div>
  )
}

export default App