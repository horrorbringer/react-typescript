import React, { useState } from 'react'
import './App.css'
import Article from './components/Article'
function App() {
  const [name, setName] = useState("");
  const handleChage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  }
  return (
    <>
      <h1>Welcome to React</h1>
      <Article name={name} />
      <input type="text" onChange={handleChage} />
    </>
  )
}

export default App;
