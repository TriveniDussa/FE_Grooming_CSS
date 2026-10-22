import React from 'react'
import './app.css'
import pro from './assets/pro.webp'

function App() {
  return (
    // <div className='container'>
    //   <button className='btn'>Login</button>
    //   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus eius sit quisquam esse autem tenetur illo, doloremque dignissimos adipisci nesciunt quam vel? Optio qui nulla, totam asperiores mollitia aspernatur facilis!</p>
    // </div>
    <div className='card'>
      <img src={pro} alt="" className='image'/>
      <p className='text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae totam itaque labore debitis perferendis amet molestias officia veniam voluptate ducimus. Dolores quos tenetur vel quisquam pariatur, fugiat obcaecati optio earum.</p>

    </div>
  )
}

export default App