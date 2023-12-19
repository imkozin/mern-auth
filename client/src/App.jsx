import './App.css'
import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Register from './pages/Register'
import Account from './pages/Account'
import People from './pages/People'
import {Toaster} from 'react-hot-toast'

function App() {

  return (
    <>
      <Navbar />
      <Toaster position='bottom-right' toastOptions={{duration: 2000}}/>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/account" element={<Account />} />
        <Route path="/people" element={<People />} />
      </Routes>
    </>
  )
}

export default App
