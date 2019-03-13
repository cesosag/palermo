import './Container.sass'

const Container = (props) => (
  <div className="container">
    {props.children}
  </div>
)

export default Container