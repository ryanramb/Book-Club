import React, {useState, useEffect} from 'react'
import BooksContainer from './components/BooksContainer'
import Header from './components/Header'
import DetailPanel from './components/DetailPannel'
import Search from './components/Search/index'
import {GlobalStyle} from './styles'
import {Transition} from 'react-transition-group'

const App = () => {
  // store API response as array
  const [books, setBooks] = useState([])
  const [selectedBook, setSelectedBook] = useState(null)
  const [showPanel, setShowPanel] = useState(false)
  const [filteredBooks, setFilteredBooks] = useState([])

  console.log('this message is going to load every time the component renders.')

  //useEffect hook will to fetch data and store in state variable
  // useEffect creates side effect in a component
  // creates side effects in a component, it schedules a events after component has rendered to DOM
  useEffect(() => {
    // promise function allow async operations to run
    // **async function cannot written directly in useEffect
    const fetchData = async () => {
      const response = await fetch('https://book-club-json.herokuapp.com/books')
      // console.log(`here's what our fetch request returns`, response)
      const books = await response.json()
      // console.log(`our json-ifed response: `, books)
      setBooks(books)
      setFilteredBooks(books)
    }
    fetchData()
  }, [])

  console.log(`the books array in our state: `, books)

  const pickBook = (book) => {
    setSelectedBook(book)
    setShowPanel(true)
  }

  // helper function to determine Panel status
  const closePanel = () => {
    setShowPanel(false)
  }

  // console.log(selectedBook)

  const filterBooks = (searchTerm) => {
    const stringSearch = (bookAttribute, searchTerm) =>
      bookAttribute.toLowerCase().includes(searchTerm.toLowerCase())
    if (!searchTerm) {
      setFilteredBooks(books)
    } else {
      setFilteredBooks(
        books.filter(
          (book) => stringSearch(book.title, searchTerm) || stringSearch(book.author, searchTerm)
        )
      )
    }
  }

  const hasFiltered = filteredBooks.length !== books.length

  return (
    <>
      <GlobalStyle />
      <Header>
        <Search filterBooks={filterBooks} />
      </Header>
      <BooksContainer
        books={filteredBooks}
        pickBook={pickBook}
        isPanelOpen={showPanel}
        title={hasFiltered ? 'Search results' : 'All books'}
      />
      <Transition in={showPanel} timeout={300}>
        {(state) => <DetailPanel book={selectedBook} closePanel={closePanel} state={state} />}
      </Transition>
    </>
  )
}

export default App
