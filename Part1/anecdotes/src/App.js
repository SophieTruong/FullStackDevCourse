import { useState } from 'react'

const Header = (props) => {
  return <h1>{props.text}</h1>
}

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

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
  const [anecdoteInd, setanecdoteVote] = useState({'0':0})

  const setToValue = () => {
    const newValue = Math.floor(Math.random() * anecdotes.length)
    setSelected(newValue)
  }

  const getVoteCount = (selectedIndex)  => {
    setanecdoteVote({...anecdoteInd, [selectedIndex]: anecdoteInd[selectedIndex] + 1})
  }
  
  const getMaxVote = (anecdoteI) => {
    return Object.entries(anecdoteI).reduce((max, anec) => max[1] > anec[1] ? max : anec);
  }
  const [maxAnec, maxVote] = getMaxVote(anecdoteInd)

  return (
    <>
      <Header text="Anecdote of the day" />
      <div>
        {anecdotes[selected]}
      </div>
      <div>
        has {Math.max(selected in anecdoteInd ? 
          anecdoteInd[selected] : 
          setanecdoteVote({...anecdoteInd, [selected]: 0}))} votes
      </div>
      <Button handleClick={() => getVoteCount(selected)} text="vote" />
      <Button handleClick={() => setToValue()} text="next anecdote" />
      
      <div>
        <Header text="Anecdote with most votes" />
        {anecdotes[maxAnec]}
        <br></br>
        has {maxVote} votes
      </div>
    </>
  )
}

export default App

