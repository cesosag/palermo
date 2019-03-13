import './Section.sass'
import Container from '../container/Container'

const Section = (props) => (
  <section {...props}>
    <Container>
      {props.children}
    </Container>
  </section>
)

export default Section
