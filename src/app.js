import React from 'react'
import { Switch, Route } from 'react-router'

import MainPage from './pages/MainPage'

class App extends React.Component {
    render() {
        return (
            <Switch>
                <Route path="/" render={props => <MainPage {...props} />} />
            </Switch>
        )
    }
}

export default App
