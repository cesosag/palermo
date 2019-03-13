import './Header.sass'
import Container from '../container/Container'

const Header = (props) => (
  <header {...props}>
    <Container>
      {props.children}
    </Container>
  </header>
)

export default Header
