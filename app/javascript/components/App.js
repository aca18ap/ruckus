import React, {Component} from 'react'
import Navigation from './Nav.js'
import AdminDashboard from './AdminDashboard.js'

class App extends Component {
    render() {
        return(
            <div>
                <Navigation/>
                <AdminDashboard/>
            </div>
        )
    }
}

export default App