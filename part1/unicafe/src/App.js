import { useState } from 'react';
import './App.css';

const Button = (props) => {
  return (
      <button onClick={props.handleClick}>{props.text}</button>
  )
}

const StatisticLine = (props) => {
  if (props.text === 'positive') {
    return (
      <tr><th>{props.text}:</th><th>{props.value} %</th></tr>
    )
  }
  return (
    <tr><th>{props.text}:</th><th>{props.value}</th></tr>
  )
}

const Statistics = (props) => {
  if (props.votes.all === 0) {
    return (
      <p>No feedback given</p>
    )
  }

  const average = ( ( (props.votes.good * 1) + (props.votes.bad * (-1) ) ) / props.votes.all )
  const positive = props.votes.good / props.votes.all

  return (
    <div>
      <table>
        <tbody>
          <StatisticLine text='good' value={props.votes.good}/>
          <StatisticLine text='neutral' value={props.votes.neutral}/>
          <StatisticLine text='bad' value={props.votes.bad}/>
          <StatisticLine text='all' value={props.votes.all}/>
          <StatisticLine text='average' value={average}/>
          <StatisticLine text='positive' value={positive}/>
        </tbody>
      </table>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [votes, setVote] = useState({
    good: 0, neutral: 0, bad: 0, all: 0
})

  const handleGoodClick = () => {
    const newVote = {
      ...votes,
      good: votes.good + 1,
      all: votes.all + 1
    }
    setVote(newVote)
  }

  const handleNeutralClick = () => {
    const newVote = {
      ...votes,
      neutral: votes.neutral + 1,
      all: votes.all + 1
    }
    setVote(newVote)
  }

  const handleBadClick = () => {
    const newVote = {
      ...votes,
      bad: votes.bad + 1,
      all: votes.all + 1
    }
    setVote(newVote)
  }


  return (
    <div>
      <h2>give feedback</h2>
      <Button handleClick={handleGoodClick} text='good'/>
      <Button handleClick={handleNeutralClick} text='neutral'/>
      <Button handleClick={handleBadClick} text='bad'/>
      <h3>statistics</h3>
      <Statistics votes={votes}/>
    </div>
  )
}

export default App