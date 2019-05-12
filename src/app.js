import React from 'react'
import { Switch, Route } from 'react-router'
import { BrowserRouter } from 'react-router-dom'

import MainPage from './pages/MainPage'

class App extends React.Component {
    render() {
        // return (
        //     <Switch>
        //         <Route path="/" render={props => <MainPage {...props} />} />
        //     </Switch>
        // )

        return <MainPage />
    }
}

export default App
