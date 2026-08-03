import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ComponentLibrary from './pages/ComponentLibrary'
import IconLibrary from './pages/IconLibrary'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ComponentLibrary />} />
        <Route path="/icons" element={<IconLibrary />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App