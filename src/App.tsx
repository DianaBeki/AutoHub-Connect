import { Routes, Route } from "react-router-dom"
import Navbar from '../src/components/Navbar';
import Footer from './components/Footer';

const App = () => {
  return (
    <main>
      <header>  
      <Navbar />
  <Routes>
  <Route path="/" element="" />
  </Routes>
  </header>
  <Footer />
    </main>
  )
}

export default App
