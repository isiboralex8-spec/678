import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function Placeholder({ title }) {
  return (
    <div className="mx-auto flex min-h-screen max-w-[1100px] items-center justify-center px-4 text-center text-3xl font-black tracking-[-0.04em] text-slate-900">
      {title}
    </div>
  );
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Placeholder title="About" />} />
        <Route path="/rooms" element={<Placeholder title="Rooms" />} />
        <Route path="/offers" element={<Placeholder title="Offers" />} />
        <Route path="/contact" element={<Placeholder title="Contact" />} />
        <Route path="/login" element={<Placeholder title="Login" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
