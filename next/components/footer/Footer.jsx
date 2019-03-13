import './Footer.sass'
import Container from '../container/Container'

const Footer = (props) => (
  <footer {...props}>
    <Container>
      {props.children}
    </Container>
  </footer>
)

export default Footer
