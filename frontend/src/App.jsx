import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import Home from "./pages/Home"
import NotFound from "./components/NotFound"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import SeekCars from "./pages/SeekCars"
import { useAuthContext } from './hooks/useAuthContext'

function App() {
  const { user } = useAuthContext()
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={user ? <Home /> : <Navigate to="/login" />}/>
          <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />}/>
          <Route path="/cars" element={user ? <SeekCars /> : <Navigate to="/login" />}/>
          <Route path="/signup" element={!user ? <Signup /> : <Navigate to="/" />}/>
          <Route path="/*" element={<NotFound/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
