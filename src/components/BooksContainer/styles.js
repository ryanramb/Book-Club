import styled from 'styled-components'

export const Container = styled.div`
  background-color: #41bf8a;
  padding: 160px 40px;
  overflow: ${({$isPanelOpen}) => ($isPanelOpen ? 'hidden' : 'scroll')};
  position: ${({$isPanelOpen}) => ($isPanelOpen ? 'fixed' : 'unset')};
  top: ${({$isPanelOpen, $top}) => ($isPanelOpen ? `-${$top}px` : 0)} @media (max-width: 800px) {
    /* reduce padding when browser gets down to 800px */
    padding: 114px 20px;
  }
`

// component for title
export const H2 = styled.h2`
  font-size: 42px;
  /* zero on all side but bottom */
  margin: 0 0 10px 0;

  // reduces font size upon reaching 800px width
  @media (max-width: 800px) {
    font-size: 32px;
  }
`

// houses the book elements
export const BookList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 40px;
  grid-row-gap: 120px;
  margin-top: 40px;
  /* When browser expands booklist will not get wider than 1200px */
  max-width: 1200px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
    grid-row-gap: 60px;
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 20px;
  }
`
