
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import VedioRoom from './pages/VedioRoom'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
       <Route path='/room/:roomId' element={<VedioRoom/>}/>
    </Routes>

  )
}

export default App
