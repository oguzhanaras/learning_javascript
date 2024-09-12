import React, { Component } from 'react'
import User from '../User/User'

export class UserList extends Component {
    render() {
        return (
            <>
                { this.props.users.map(user => (
                    <User user={ user } key={ user.id }/>
                ))}
            </>
        )
    }
}

export default UserList