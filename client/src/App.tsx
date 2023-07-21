import { Create } from "./pages/Create"
import { Edit } from "./pages/Edit"
import { Home } from "./pages/Home"
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="container">
      <header className="py-3 mb-3">
        <h2 className="text-center">Money Tracker</h2>
      </header>
      <div className="p-2">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/create" element={<Create />}></Route>
          <Route path="/edit/:id" element={<Edit />}></Route>
        </Routes>
      </div>
    </div>
  )
}

export default App


