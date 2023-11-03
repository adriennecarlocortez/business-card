import { useState } from 'react'
import './App.css'
import Main from './components/Main'
import Header from './components/Header'
import Footer from './components/Footer'
import Copyright from './components/Copyright'

function App() {
  const [count, setCount] = useState(0)
 
  return (
    <>
      <Header />
      <Main />
      <Footer />
      <Copyright />
    </>
  )
}

export default App
