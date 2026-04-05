// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import './App.css'
// import Navbar from './Component/Navbar'
// import Home from './Pages/Home'
// import Footer from './Component/Footer'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//        <Navbar />
//        <Home />
//        <Footer />
//     </>
//   )
// }

// export default App


import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom' // Ye line add ki
import './App.css'
import Navbar from './Component/Navbar'
import Home from './Pages/Home'
import Courses from './Pages/Courses' // Apna Courses page import karein
import Footer from './Component/Footer'

function App() {
  return (
    <Router> {/* Poore app ko Router mein wrap karein */}
      <Navbar />
      
      <Routes>
        {/* "/" path par Home page dikhega */}
        <Route path="/" element={<Home />} />
        
        {/* "/course" path par Courses page dikhega */}
        <Route path="/course" element={<Courses />} />
      </Routes>

      <Footer />
    </Router>
  )
}

export default App