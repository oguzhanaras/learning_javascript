import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Navbar extends Component {
    render() {
        return (
            <nav className="navbar bg-body-tertiary">
                <div className="container">
                    <a className="navbar-brand" href="/">
                        <i className={ this.props.icon }></i>
                        <span className='ms-2'>{ this.props.title }</span>
                    </a>
                </div>
            </nav>
        )
    }
}

Navbar.defaultProps = {
    icon: "bi bi-github",
    title: "GitHub Finder"
}

Navbar.propTypes = {
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}

export default Navbar;