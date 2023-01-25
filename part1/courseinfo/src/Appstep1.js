
const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Content = (props) => {
  return (
    <div>
      <p>Name of the exercise is {props.content[0].part} with {props.content[0].exercises} of exercises.</p>
      <p>Name of the exercise is {props.content[1].part} with {props.content[1].exercises} of exercises.</p>
      <p>Name of the exercise is {props.content[2].part} with {props.content[2].exercises} of exercises.</p>
    </div>
    )
}

const Total = (props) => {
  return (
    <div>
      <p>Total number of exercise is <b>{props.content[0].exercises + props.content[1].exercises + props.content[2].exercises}</b>.</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'

  const content = [
    { part: 'Fundamentals of React', exercises: 10},
    { part: 'Using props to pass data', exercises: 7},
    { part: 'State of a component', exercises: 14}
  ]

  return (
    <div>
      <Header course={course} />
      <Content content={content} />
      <Total content={content} />
    </div>
  )
}

export default App