
const Header = ({ course }) => <h2>{course.name}</h2>

const Part = ({ part }) => {
    return (
      <p>
        {part.name} {part.exercises}
      </p>
      )
}

const Content = ( {parts} ) => {
  return (
    <>
        {parts.map(part => 
          <Part
            key={part.id}
            part={part}
          />
        )}
    </>
    )
  }

const Sum = ({ parts }) => {
  const total = parts.reduce((accumulator, currentValue) => 
    accumulator + currentValue.exercises,
    0,
  );
  return (
    <b>total of {total} exercises</b>
  )
}

const Course = ({courses}) => {
  return (
    courses.map(course =>
    <div key={course.id}>
      <Header course={course} />
      <Content parts={course.parts} />
      <Sum parts={course.parts} />
    </div>
  ))
}

export default Course