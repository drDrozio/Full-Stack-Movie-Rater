import React, { Component } from 'react';

class Footer extends Component {

    state = {
        name:'Ishan',
        age:21,
        isLogin:true
    }

    changed = evt => {
        this.setState({name:evt.target.value})
        console.log(this.state.name)
    }

    render() {
        return( 
            <div>
                <h1>Footer Starts</h1>
                { this.state.isLogin ? 
                (
                    <React.Fragment>
                        <h2 onClick={this.props.myAlert}>Page by {this.props.trademark}</h2>
                        <input value={this.state.name} onChange={this.changed} type="text"/>
                    </React.Fragment>
                ):
                (
                    <React.Fragment>
                        <h2>You must login to view this</h2>
                    </React.Fragment>
                )
                }
                <h1>Footer Ends</h1>
            </div>
        )
    }
}

export default Footer;