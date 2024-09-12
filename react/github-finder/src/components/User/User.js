import React, { Component } from 'react'

export class User extends Component {

    render() {

        const { avatar_url, login, html_url } = this.props.user;
        return (
            <>
                <div className='container mt-4'>
                    <div className="card mb-3">
                        <div className="row g-0">
                            <div className="col-md-4">
                            <img src={ avatar_url } className="img-fluid rounded-start" style={ {width: "100%"} } alt={ login } />
                            </div>
                            <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{ login }</h5>
                                <br />
                                <a href={ html_url } className='btn btn-primary mt-3' target="_blank" rel="noreferrer">GitHub Profile</a>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default User