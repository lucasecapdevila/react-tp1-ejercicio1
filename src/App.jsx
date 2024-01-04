import { Container } from 'react-bootstrap'
import './App.css'
import Footer from './components/Footer'
import Saludo from './components/Saludo'

function App() {

  return (
    <>
      <Container className='my-4 mainPage'>
        <Saludo />
      </Container>
        
      <Footer />
    </>
  )
}

export default App
