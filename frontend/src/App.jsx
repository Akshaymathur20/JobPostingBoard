import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SignUP from './components/SignUp'
import LeftPanel from './components/LeftPanel'
import VerificationForm from './components/Verification'

function App() {
  return (
    <>
    <div>
      <LeftPanel/>
    </div>
{/* <div className="App">
      <SignUP/>
    </div> */}
    <div>
      <VerificationForm/>
    </div>
    </>
  )
}

export default App
