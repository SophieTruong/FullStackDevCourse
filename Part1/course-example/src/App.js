import React, { useState } from 'react';
// const App = () => {
//   console.log('Start here')
//   const [left, setLeft] = useState(0)
//   const [right, setRight] = useState(0)
//   const [allClicks, setAll] = useState([])

//   const handleLeftClick = () => {
//     setAll(allClicks.concat('L'))
//     setLeft(left + 1)
//   }

//   const handleRightClick = () => {
//     setAll(allClicks.concat('R'))
//     setRight(right + 1)
//   }
//   const [value, setValue] = useState(10)
//   const setToValue = (newValue) => {
//     setValue(newValue)
//   }
//   const Button = (props) => {
//     console.log(props.text)
//     return (
//     <button onClick={props.handleClick}>
//       {props.text}
//     </button>
//   )}

//   return (
//     <div>
//       {left}
//       <button onClick={handleLeftClick}>left</button>
//       <button onClick={handleRightClick}>right</button>
//       {right}

//       <p>{allClicks.join(' ')}</p>
//       <div>
//         <Button handleClick={() => setToValue(0)} text="thousand" />
//       </div>
//     </div>

//   )
// }
const Display = props => <div>{props.value}</div>

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const App = () => {
  const [value, setValue] = useState(10)

  const setToValue = newValue => {
    console.log('value now', newValue)
    setValue(newValue)
  }

  return (
    <div>
      <Display value={value} />
      <Button handleClick={() => setToValue(1000)} text="thousand" />
      <Button handleClick={() => setToValue(0)} text="reset" />
      <Button handleClick={() => setToValue(value + 1)} text="increment" />
    </div>
  )
}
export default App;
