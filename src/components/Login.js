import React from 'react';


class Login extends React.Component {
    constructor(props){
        super(props)
    };

    loginHandler(evt){
        console.log('click', evt);
    }

    render() {
        return (
            <div>
                <h1>Login page</h1>
                <button onClick={this.loginHandler}> login</button>
                <a href='https://github.com/login/oauth/authorize?client_id=2474520eac9505d3e14c'
                   target='_blank'>
                    get login link
                </a>
            </div>
        )
    }

}

export default Login;