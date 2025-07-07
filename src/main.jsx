// import { StrictMode } from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
// import './index.css'
// import Header from './Header'
// import { Content1 } from './Content1'
// import { Content2 } from './Content2'
// import { GameContent } from './GameContent'
// import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  // <div className="parent">
  //   {/* <Header/>
  //   <Content1/>
  //   <Content2/>
  //   <GameContent/> */}
  // </div>
  <StrictMode>
    <App/>

  </StrictMode>
)




