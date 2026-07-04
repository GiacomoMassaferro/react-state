import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Product from './components/Product'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="row">
        <Product totle="Maglia donna" qta="2" price="20" img="https://cdn.tc.promotron.com/web-images/f791ec85-eda3-4ec6-8620-3b8650cc5c88 " />
        <Product totle="Maglia uomo" qta="3" price="15" img="https://www.saldimoda.com/2903-large_default/selected-homme-maglia-uomo-manica-lunga-nera-girocollo-cotone.jpg" />
      </div>
    </>
  )
}

export default App
