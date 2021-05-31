import React, { Component } from 'react';

class RegistrationForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: ''
        }
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log('form is submitted. Email value is', this.state.email);
    }

    handleEmailChange(e) {
        console.log('email was changed', e.target.value);
        
        this.setState({email: e.target.value});
    }

    render() {
        return (
            <form className='form' onSubmit={this.handleSubmit}>
                <input 
                    type='text'
                    placeholder='E-mail'
                    value={this.state.email}
                    onChange={this.handleEmailChange}
                />
                <button>Save</button>
            </form>
        );
    }
}

export default RegistrationForm;