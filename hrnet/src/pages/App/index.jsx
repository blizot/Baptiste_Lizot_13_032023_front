import Header from '../../components/Header'
import Footer from '../../components/Footer'

function App({ children }) {
  return (
    <>
      <Header />
     { children }
     <Footer />
    </>
  )
}

export default App
