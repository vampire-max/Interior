import logo from './logo.svg'
import './App.scss'
import { useState } from 'react'
import Banner from './components/banner'
import Header from './components/header'
import { Modal } from './components/modal'
import { SignUP } from './components/signUp'
import { Service } from './components/service'
import { AboutUs } from './components/aboutUs'
import { Project } from './components/project'
import { Team } from './components/team'
import { News } from './components/News'
import { Footer } from './components/footer/index'

function App() {
  // useEffect(() => {
  //   console.log('h2', document.querySelector('h2').parentElement)
  // }, [])

  const [open, setOpen] = useState(false)

  return (
    <div className="App">
      <Header setOpen={setOpen} />
      <Banner />
      {/* <div style={{ height: '100vh' }}>
        <button style={{ cursor: 'pointer' }} onClick={() => setOpen(true)}>
          show modal
        </button>
        <Middleman />
        <hr />
        <Middleman>
          <h2>Middleman children</h2>
        </Middleman>
      </div> */}
      <Modal open={open}>
        {/* <button onClick={() => setOpen(false)}>Close</button> */}
        <SignUP setOpen={setOpen} onclose={onclose} />
      </Modal>
      <Service />
      <AboutUs />
      <Project />
      <Team />
      <News />
      <Footer />
    </div>
  )
}

// const Middleman = ({ children }) => {
//   return (
//     <div>
//       <h4>Middleman</h4>
//       {children}
//     </div>
//   )
// }

export default App
