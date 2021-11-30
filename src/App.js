import logo from './logo.svg'
import './App.scss'
import Banner from './components/Banner'
import Header from './components/Header'
import { Modal } from './components/modal'
import { useState } from 'react'

function App() {
  const [open, setOpen] = useState(false)

  return (
    <div className="App">
      <Header />
      <Banner />
      <div style={{ height: '100vh' }}>
        <button onClick={() => setOpen(true)}>show modal</button>
      </div>
      <Modal open={true} onClose={() => setOpen(false)}>
        <button onClick={() => setOpen(false)}>Close</button>
        <h1>THis is Modal</h1>
      </Modal>
    </div>
  )
}

export default App
