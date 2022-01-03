import React, {useRef, useEffect, useState} from 'react'
import {debounce} from 'lodash-es'
import {Container, H2, BookList} from './styles'
import Book from '../Book'

const BooksContainer = ({books, pickBook, isPanelOpen, title}) => {
  // will store the y cordinates scroll position in the broswer as pixel value, top of the page is 0
  const [scroll, setScroll] = useState(0)
  const prevPanelState = useRef(false)

  // will trigger when the isPanelOpen changes
  useEffect(() => {
    // debounce delays invoking a func until after wait milliseconds
    const handleScroll = debounce(() => {
      // scrollY returns the number of pixels the document is current scrolled veritically
      setScroll(window.scrollY)
    }, 100)
    // useEffect will now only run after isPanelOpen value is changed
    // when panel is closed, scroll position is saved after the user stops scrolling.. will not track when panel is open
    if (!isPanelOpen) {
      window.addEventListener('scroll', handleScroll)
    }
    // clean up function to prevent memory leaks
    return () => {
      window.addEventListener('scroll', handleScroll)
    }
    prevPanelState.current = isPanelOpen
  }, [isPanelOpen, prevPanelState, scroll])

  useEffect(() => {
    if (prevPanelState.current && !isPanelOpen) {
      window.scroll(0, scroll)
    }
  })

  console.log(scroll)

  return (
    <Container $isPanelOpen={isPanelOpen} $top={scroll}>
      <H2>{title}</H2>
      <BookList>
        {books.map((book) => (
          <Book key={book.id} book={book} pickBook={pickBook} />
        ))}
      </BookList>
    </Container>
  )
}

export default BooksContainer
