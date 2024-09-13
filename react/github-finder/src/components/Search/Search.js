import React, { Component } from 'react'

export class Search extends Component {

    constructor(props) {
        super(props)
        this.state = {
            keyword: ''
        }
    }

    handleChange = (e) => {
        this.setState({ keyword: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.searchusers(this.state.keyword);
        this.setState({ keyword: '' });
    }


    render() {
        return (
            <>
                <div className='container my-3'>
                    <form onSubmit={ this.handleSubmit } className="input-group mb-3">
                        <input onChange={ this.handleChange } value={ this.state.keyword } type="text" className="form-control" placeholder="kullanıcı adı girin" aria-label="Recipient's username" aria-describedby="button-addon2" />
                        <button className="btn btn-outline-secondary" type="submit" id="button-addon2">Ara</button>
                    </form>
                    {
                        this.props.showClearButton && <button className='btn btn-outline-danger w-100' onClick={ this.props.clearResults }>Verileri Temizle</button>
                    }
                </div>
            </>
        )
    }
}

export default Search