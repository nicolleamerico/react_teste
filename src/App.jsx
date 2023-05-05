//import { useState } from 'react'
import './App.css'
//import Produtos from 'Produtos'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <div className='body'>
      <div>
        <nav className='top'>
          <img className='logo' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3uuN0oOj7zGCoJuDQC-vl_0qUmHXHUXdFNg&usqp=CAU" alt="" />
          
          <div className='separar'> 
            <div className='texto'>
              <a href="./App.jsx.jsx">Home</a>
            </div>
            <div className='texto2'>
              <a href="./Produtos.jsx" >Produtos</a>
            </div>
          </div>

          <div>
            <h1 className='tituloProd'>Produtos</h1>
          </div>

        </nav>
      </div>
    </div>
    
  )
}

export default App