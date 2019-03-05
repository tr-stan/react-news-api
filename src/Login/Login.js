import React, { Component } from 'react'
import { Button, Icon, Input } from 'semantic-ui-react'

class Login extends Component {
    constructor() {
        super()

        this.state = {
            username: '',
            password: ''
        }
    }

    handleSubmit = (event) => {
        // stop page from refreshing
        event.preventDefault()
        // pass state up to login method in App.js
        this.props.login(this.state.username)
    }

    handleChange = (event) => {
        // set state so it can be used in handleSubmit method above
        this.setState({
            // this sets all the properties in the state based off the attributes of the inputs in the form rendered below
            [event.currentTarget.name]: event.currentTarget.value
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
				<Input type='text' name="username" placeholder="username" value={this.state.username} onChange={this.handleChange} />
        		<Input type='password' name="password" placeholder="password" value={this.state.password} onChange={this.handleChange} />
        		<Button animated>
                    <Button.Content visible>Submit</Button.Content>
                    <Button.Content hidden>
                        <Icon name='arrow right' />
                    </Button.Content>
                </Button>
			</form>
        )
    }
}

export default Login