import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CuratorSpeech from './CuratorSpeech'
import AtlantisStoryTeller from './AtlantisStoryTeller'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <CuratorSpeech text="Welcome to ArtVistas! Explore the beauty of art and culture." /> */}
    <AtlantisStoryTeller />
    </>
  )
}

export default App
