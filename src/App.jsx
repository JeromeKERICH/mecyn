import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import Programs from './pages/Dipco'
import Contact from './pages/Contact'
import { FloatingWhatsApp } from './components/FloatingWA'


function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header/>
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/dipco" element={<Programs/>}/>
            <Route path="/contact" element={<Contact/>}/>
            
          </Routes>
        </main>
        <FloatingWhatsApp/>
        <Footer/>
      </div>
    </Router>
  )
}

export default App