import React from 'react'
import {Logo, HeaderContainer} from './styles'

// functional component implicit return

const Header = ({children}) => (
  <HeaderContainer>
    {/* this will cause logo to refresh page  */}
    <a href="/">
      {/* SVGs take title attribute instead of alt  */}
      <Logo title="Book Club Logo" />
    </a>
    {/* this is where search component will redner  */}
    {children}
  </HeaderContainer>
)

export default Header
