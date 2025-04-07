import './App.css'
import { Routes, Route} from 'react-router'
import Play from './components/Play'
import Home from './components/Home'

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/play' element={<Play/>}/>
      </Routes>
    </>
  )

}

