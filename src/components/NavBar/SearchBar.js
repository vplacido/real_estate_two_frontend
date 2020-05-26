import React from 'react';
import {withRouter} from 'react-router-dom'

class Search extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            searchTerm: ""
        }
    }

    changeTerm(e) {
        this.setState({searchTerm: e})
    }

    submitForm(e) {
        e.preventDefault();
        this.props.history.push('/search');
    }
    // on submit store the input value to state
    // then render to /search? and render the data from api
    render() {
        return (
            <div>
                <form onSubmit={this.submitForm.bind(this)}>
                    <input type="text" placeholder="Search" onChange={(e) => this.props.changeState(e.target.value)}></input>
                    <input type="submit"></input>
                </form>
            </div>
        )
    }
}

export default withRouter(Search);