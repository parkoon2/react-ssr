import React from 'react'
import { Helmet } from 'react-helmet'
import queryString from 'query-string'

// import './style.css'

class Home extends React.Component {
    exampleMethod() {
        console.log('JS is running')
    }

    componentDidMount() {
        console.log(queryString.parse(this.props.location.search))
    }

    head() {
        return (
            <Helmet>
                <title>My page title</title>
            </Helmet>
        )
    }

    render() {
        return (
            <div>
                {this.head()}
                <h1>My Home Page</h1>

                <p>Some contents</p>
                <button onClick={this.exampleMethod}>
                    console log some text
                </button>
            </div>
        )
    }
}

export default Home
