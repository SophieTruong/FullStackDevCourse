import { useState } from 'react'

const Header = (props) => {
  return <h1>{props.text}</h1>
}
const Button = (props) => {
  return <button onClick={props.handleClick}>{props.text}</button>
}
const StatisticsLine = props => { 
  if (props.text=== "positive") {
    return (
      <tr> 
          <td>{props.text}</td>  
          <td></td>
          <td> {props.value} %</td>
        </tr>
    )
  }
  return <tr> 
          <td>{props.text}</td>  
          <td></td>
          <td> {props.value} </td>
        </tr>
}

const Statistics = (props) => {
  if (props.value[0] === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }
  else{
    const a = props.value[0]
    const avg = (props.value[1] - props.value[3])/ props.value[0]
    const pos = props.value[1] / props.value[0] * 100
    return(
      <table>
        <tbody>
        < StatisticsLine text="good" value={props.value[1]} />
        < StatisticsLine text="neutral" value={props.value[2]} />
        < StatisticsLine text="bad" value={props.value[3]} />
        < StatisticsLine text="all" value={a} />
        < StatisticsLine text="average" value={avg} />
        < StatisticsLine text="positive" value={pos}  />
        </tbody></table>
  )}
}

const App = () => {
  // save clicks of each button to its own state

  const [clicks, setClicks] = useState({
    good: 0, neutral: 0, bad:0
  })
  const [allClicks, setAll] = useState(0)

  const handleGoodClick = () =>{
    setAll(allClicks + 1 )
    setClicks({ ...clicks, good: clicks.good + 1 })
  }

  const handleNeutralClick = () =>{
    setAll(allClicks + 1 )
    setClicks({ ...clicks, neutral: clicks.neutral + 1 })
  }  

  const handleBadClick = () =>{
    setAll(allClicks + 1 )
    setClicks({ ...clicks, bad: clicks.bad + 1 })
  }
  
  return (
    <div>
      <Header text="give feedback" />

      <Button handleClick={handleGoodClick} text="good" />
      <Button handleClick={handleNeutralClick} text="neutral" />
      <Button handleClick={handleBadClick} text="bad" />

      <Header text="statistics" />
      <Statistics value={[allClicks, clicks.good, clicks.neutral, clicks.bad]} />
    </div>
  )
}

export default App
