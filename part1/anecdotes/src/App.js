import { useState } from 'react';
import './App.css';

const Header = ({text}) => {
  return (
    <h2>{text}</h2>
  )
}

const Anecdote = (props) => {
  return (
    <div>
      <p>{props.anecdotes}</p>
      <p>has {props.points} votes</p>
    </div>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

const Statistics = (props) => {
  let maxVotes = Math.max.apply(Math, props.points)
  let maxAnecdoteIndex = props.points.indexOf(maxVotes)

  if (maxVotes === 0) {
    return (
      <p>No votes for any anecdote so far.</p>
    )
  }

  return (
    <p>{props.anecdotes[maxAnecdoteIndex]}</p>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(
    Array(anecdotes.length).fill(0)
  )

  const handleClick = () => {
    let randomNumber = Math.floor((Math.random() * (anecdotes.length - 1) + 1))
    while (randomNumber === selected) {
      randomNumber = Math.floor((Math.random() * (anecdotes.length - 1) + 1))
    }
    setSelected(randomNumber)
  }

  const handleVote = () => {
      const copy = [...points]
      copy[selected] += 1
      setPoints(copy)
  }

  return (
    <div>
      <Header text='Anecdote of the day' />
      <Anecdote anecdotes={anecdotes[selected]} points={points[selected]} />
      <Button handleClick={handleVote} text='vote' />
      <Button handleClick={handleClick} text='next anecdote' />
      <Header text='Anecdote with most votes' />
      <Statistics points={points} anecdotes={anecdotes}/>
    </div>
  )
}


export default App;
