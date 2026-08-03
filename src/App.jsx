import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ComponentLibrary from './pages/ComponentLibrary'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ComponentLibrary />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
