import { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>{props.text}</button>
  )
}

const Statistics = (props) => {
  if (props.allVotes === 0) {
    return (
      <p>No feedback given</p>
    )
  }
  return (
    <div>
      <p>good: {props.good}</p>
      <p>neutral: {props.neutral}</p>
      <p>bad: {props.bad}</p>
      <p>all: {props.allVotes}</p>
      <p>average: {((props.good*1) + (props.bad*(-1)) ) / props.allVotes}</p>
      <p>positive: {props.good / props.allVotes}</p>
    </div>
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
      <Button handleClick={handleGoodClick} text='good'/>
      <Button handleClick={handleNeutralClick} text='neutral'/>
      <Button handleClick={handleBadClick} text='bad'/>
      <h3>statistics</h3>
      <Statistics good={good} bad={bad} neutral={neutral} allVotes={allVotes}/>
    </div>
  )
}

export default App