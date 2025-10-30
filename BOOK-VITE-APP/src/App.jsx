import React from 'react'
import Book from './component/Book'
import Header from './component/Header'
import Footer from './component/Footer'

const App = () => {
  const data = [
    { image: "", title: "Physics", price: 480 },
    { image: "", title: "Chemistry", price: 495 },
    { image: "", title: "Mathematics", price: 455 },
  ]

  return (
    <div>
      <Header />

      <div className='booklist'>
        {data.map((b, i) => (
          <Book key={i} book={b} />
        ))}
      </div>

      <Footer />
    </div>
  )
}

export default App
