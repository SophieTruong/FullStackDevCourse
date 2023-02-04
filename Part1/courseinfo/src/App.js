const Header = (prop) => {
  return(
    <div> <h1>{prop.course}</h1> </div>
  )
}
const Part = (props) => {
  return(
    <p> {props.part} {props.exercise} </p>
  )
}
const Content = (props) => {
  return(
    <div>
      {props.parts.map((x, i) => { // i for index. Added due to "Each child in a list should have a unique "key" prop."
        return <Part key={i} part={x.name} exercise={x.exercises} />
      })}
    </div>
  )
}
const Total = (props) => {
  return(
  <div>
    <p>Number of exercises { props.parts.reduce((partialSum, x) => partialSum+x.exercises,0) }</p>
  </div>
  )
}
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App