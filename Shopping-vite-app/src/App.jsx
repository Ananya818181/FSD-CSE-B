import React, { useEffect, useState } from 'react'
import Book from './component/Book'
import Header from './component/Header'
import Footer from './component/Footer'
import './App.css'

function App() {
  const [books, setBooks] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        setBooks(data)
      })
      
  }, [])

  return (
    <>
      <Header />
      <div className='BookList'>
        {books.map(book => (
          <Book key={book.id} book={book} />
        ))}
      </div>
      <Footer />
    </>
  )
}

export default App
