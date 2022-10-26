import React, {Component} from 'react'
import Navigation from './Nav.js'
import AdminDashboard from './AdminDashboard/AdminDashboard.js'

class AdminDashboardApp extends Component {
    render() {
        return(
            <div>
                <Navigation/>
                <AdminDashboard/>
            </div>
        )
    }
}

export default AdminDashboardApp