const Header = (prop) => {
  return(
    <div>
      <h1>{prop.course}</h1>
    </div>
  )
}
const Part = (props) => {
  return(
    <p>
      {props.part} {props.exercise}
    </p>
  )
}

const Content = (props) => {
  return(
    <div>
      <Part part={props.part[0]} exercise={props.exercise[0]}/>
      <Part part={props.part[1]} exercise={props.exercise[1]}/>
      <Part part={props.part[2]} exercise={props.exercise[2]}/>
    </div>
  )
}
const Total = (props) => {
  return(
  <div>
    <p>Number of exercises {props.x + props.y + props.z}</p>
  </div>
  )
}
const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  console.log("here")
  return (
    <div>
      <Header course={course} />
      <Content part={[part1,part2,part3]} exercise={[exercises1,exercises2,exercises3]} />
      <Total x={exercises1} y={exercises2} z={exercises3} />
    </div>
  )
}

export default App