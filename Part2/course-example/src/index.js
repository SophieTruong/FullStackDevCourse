import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'
import './index.css'

// axios.get('http://localhost:3001/notes').then(
//   response => {
//     const notes = response.data
//     console.log(response)
//     console.log(notes)
//     ReactDOM.createRoot(document.getElementById('root')).render(
//       <App notes={notes} />)
//   }
// )
ReactDOM.createRoot(document.getElementById('root')).render(<App />)
