import { useState } from 'react'

import './App.css'

import AboutSection from './components/AboutSection'
import InteractionButtons from './components/InteractionButtons'
import MainContent from './components/MainContent'
import Socials from './components/Socials'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='rounded-lg  bg-[#23252C] h-[800px] w-[300px] m-auto mt-[5%] p-5 shadow-2xl'>
      <AboutSection />
      <InteractionButtons />
      <MainContent />
      <Socials />
    </div>
  )
}

export default App;
