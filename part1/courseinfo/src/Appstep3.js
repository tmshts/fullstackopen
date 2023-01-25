
const Header = (props) => {
  console.log(props)
  return (
    <h1>{props.course}</h1>
  )
}

const Part = (props) => {
  return (
    <p>Name of the exercise is {props.part} with {props.exercises} of exercises.</p>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.content[0].part} exercises={props.content[0].exercises} />
      <Part part={props.content[1].part} exercises={props.content[1].exercises} />
      <Part part={props.content[2].part} exercises={props.content[2].exercises} />
    </div>
    )
}

const Total = (props) => {
  return (
    <div>
      <p>Total number of exercise is <b>{props.exercise1 + props.exercise2 + props.exercise3}</b>.</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course} />
      <Part part={part1.name} exercises={part1.exercises} />
      <Part part={part2.name} exercises={part2.exercises} />
      <Part part={part3.name} exercises={part3.exercises} />
      <Total exercise1={part1.exercises} exercise2={part2.exercises} exercise3={part3.exercises} />
    </div>
  )
}

export default App