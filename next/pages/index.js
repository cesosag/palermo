import fetch from 'isomorphic-unfetch'

const Index = (props) => {
    return <div>Welcome {props.data.title}!</div>
}

Index.getInitialProps = async function() {
    const res = await fetch(`http://web/api/v2/pages/3`)
    const data = await res.json()
    return { data }
}

export default Index