import React from 'react';

class Form extends React.Component {
    state = {
        city: ""
    }
    handleChange = (e) => this.setState({city: e.target.value})
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.weatherMethod(this.state.city)
    }
    render() {
        return (
            <form >
                <input type='text' placeholder='city' value={this.state.city} onChange={this.handleChange} />
                <button onClick={this.handleSubmit}>Get Weather</button>
            </form>
        )
    }
}

export default Form;