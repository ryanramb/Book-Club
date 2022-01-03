import styled from 'styled-components'
import {ReactComponent as LogoSVG} from '../../assets/logo.svg'

export const Logo = styled(LogoSVG)`
  height: 40px;
  width: 270px;
  display: block;

  @media (max-width: 800px) {
    height: 33px;
    width: 222px;
  }
`
export const HeaderContainer = styled.header`
  background: #ffdb50;
  border-bottom: 2px solid #000;
  padding: 20px 40px;
  /* any spacing rules are including the elements total height and width  */
  box-sizing: border-box;
  /* all child elements are centered vertically  */
  align-items: center;
  /* all items are distrbuted equally along horizontal axis  */
  justify-content: space-between;
  width: 100vw;
  display: flex;
  /* header stays at top of page  */
  position: fixed;
  /* lives above all other elements on page */
  z-index: 3;

  @media (max-width: 800px) {
    padding: 20px;
  }
`
