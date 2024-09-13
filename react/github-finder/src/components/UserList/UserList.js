import React, { Component } from 'react';
import User from '../User/User';
import Loading from '../Loading/Loading';

export class UserList extends Component {
    render() {
        // eğer loading true ise Loading componentini göster
        if (this.props.loading) {
            return <Loading />;
        }

        // eğer kullanıcı yoksa mesaj göster
        if (!this.props.users || this.props.users.length === 0) {
            return (
                <div className='container'>
                    <h2 className='text-center'>Lütfen kullanıcı araması yapın</h2>
                </div>
            );
        }

        // veri gelince listeyi göster
        return (
            <>
                {this.props.users.map(user => (
                    <User user={user} key={user.id} />
                ))}
            </>
        );
    }
}

export default UserList;
