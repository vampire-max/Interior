import logo from './logo.svg'
import './App.scss'
import { useState } from 'react'
import Banner from './components/Banner'
import Header from './components/Header'
import { Modal } from './components/modal'
import { Form } from './components/Form'
import { Service } from './components/service'
import { AboutUs } from './components/aboutUs'
import { Project } from './components/project'
import { Team } from './components/team'
import { News } from './components/News'
import { Footer } from './components/footer/index'
import { Gallery } from './components/gallery'

function App() {
  // useEffect(() => {
  //   console.log('h2', document.querySelector('h2').parentElement)
  // }, [])

  const [open, setOpen] = useState(false)

  return (
    <div className="App">
      {/* <Header setOpen={setOpen} /> */}
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
        <Form setOpen={setOpen} />
      </Modal>
      <Service />
      <AboutUs />
      <Project />
      <Team />
      <News />
      <Gallery />
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
