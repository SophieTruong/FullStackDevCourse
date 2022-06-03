import { useState } from 'react'
const Number = (props) => {
  return <p>{props.name} {props.number}</p>
}
const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [someName, setNameFiltering] = useState('0')
  // console.log(persons[0].name)

  const checkuplicated = (newPerson) => {
    console.log(persons.find(p => p.name === newPerson.name))
    const ret = persons.find(p => p.name === newPerson.name) ? true : false
    console.log(ret)
    return ret
  }
  const getFilteredName = (someName) => {
    return persons.find(p => p.name === someName)
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    const newPerson = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    }
    checkuplicated(newPerson) ? window.alert(`${newPerson.name} is already added to phonebook`) : setNameFiltering(persons.concat(newPerson))
    setNewName('')
    setNewNumber('')
  }
  const handleFilter = (event) => {
    event.preventDefault()
    console.log(event.target.value)
    console.log("Handling filtering event")
    const filterInput = someName
    checkuplicated(filterInput) ? window.alert(`${filterInput} is FOUND in the phonebook`) : setPersons(persons.concat(filterInput))
  }
  const handleNameChange = (event) => {
    setNewName( event.target.value ) 
  }
  const handleNumberChange = (event) => {
    setNewNumber( event.target.value ) 
  }
  const handleFilterName = (event) => {
    return setNameFiltering( event.target.value ) 
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit= { handleFilter }>
        <div>filter show with <input value={someName} onChange={ handleFilterName }/> </div>
        <div><button type="submit">filter</button></div>
      </form>
      
      <h2>Add new information</h2>
      <form onSubmit={ handleSubmit }>
        <div>name: <input value={newName} onChange={ handleNameChange }/> </div>
        <div>number: <input value={newNumber} onChange={ handleNumberChange }/></div>
        <div><button type="submit">add</button></div>
      </form>
      <h2>Numbers</h2>
      <div>{ persons.map((p) =>{ return <Number key={p.name} name={p.name} number={p.number} />} )}</div>
      
    </div>
  )
}

export default App