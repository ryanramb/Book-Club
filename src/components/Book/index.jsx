import React from 'react'
import {Container, Cover, Title, Author} from './styles'

// functional component with impliet return
const Book = ({book, pickBook, isLarge}) => (
  // container
  // isLarge will be able to distingish if its being referenced in book list  or pannel
  // $isLarge is a transient prop, this is being used because we've reached the lowest level of prop drilling for this data
  <Container $isLarge={isLarge} onClick={() => pickBook(book)}>
    {/* book cover */}
    {/* generate dynamic alt text for each img */}
    <Cover alt={`Book cover for ${book.title} by ${book.author}`} src={book.image} />
    {/* holds descriptive info  */}
    <figcaption>
      {/* for book title */}
      <Title $isLarge={isLarge}>{book.title}</Title>
      {/* for author name */}
      <Author>{book.author}</Author>
    </figcaption>
  </Container>
)

export default Book
