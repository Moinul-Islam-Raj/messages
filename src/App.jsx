import Register from "./pages/Register"
import Login from './pages/Login'
import Home from './pages/Home'
import { Navigate, Route, Routes } from "react-router-dom"
import { Toaster } from "react-hot-toast"
import { useContext } from "react"
import { AuthContext } from "./contexs/authContext"
import axios from "axios"

function App() {
  axios.defaults.baseURL = 'https://chat-api-2-k8ab.onrender.com';
  axios.defaults.withCredentials=true;
  const {user} = useContext(AuthContext);
  return (
    <>
      <Routes>
        <Route path="/*" element={ user ? <Home /> : <Navigate to='/login'/> }/>
        <Route path="/login" element={user ? <Navigate to='/'/> : <Login /> }/>
        <Route path="/signup" element={user ? <Navigate to='/'/> : <Register />}/>
      </Routes>
      <Toaster />
    </>
  )
}

export default App
