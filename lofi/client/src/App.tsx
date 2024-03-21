import {useEffect, useState} from 'react'
import './App.css'

function App() {
  const [greeting, setGreeting] = useState('')


    useEffect(() => {
        fetch('/lofi')
            .then((res)=> res.text())
            .then((setGreeting));
    }, []);


  return (
    <>
     <h1>{greeting}</h1>
    </>
  )
}

export default App
