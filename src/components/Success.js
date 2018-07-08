import React from 'react';
import axios from 'axios';


class Success extends React.Component {
    constructor(props){
        super(props)
    };
    componentDidMount(){
        const code = new URLSearchParams(this.props.location.search);
        console.log('Code', code.get('code'));
        axios({
            baseURL: 'https://github.com/login/oauth/access_token',
            method: 'POST',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            },
            body: {
                client_id: '2474520eac9505d3e14c',
                client_secret: '83946ac2bc67c483ea1ebe179fbc08c6f1cee842',
                code: code
            }
        })
            .then( res => console.log(res.data))
            .catch(err => console.log(err));
    };
    render() {
        return (
            <div>
                <h1>Success login</h1>
                <i>Bohdan is cool programmer, and Sergiy poor </i>
            </div>
        )
    }

}

export default Success;