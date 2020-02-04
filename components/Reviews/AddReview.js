import React from 'react';

export class AddReview extends React.Component {
    state = {
        experience: ''
    }
    handleChanges = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };
    handleSubmit = e => {
        e.preventDefault();
    }
    render() {
        return (
            <form onSubmit = {this.handleSubmit}>
                <input 
                type = "textarea"
                name = "experience"
                value = {this.state.experience}
                placeholder = "What was the food like? How was the service? Would you go again?"
                onChange = {this.handleChanges}
                />
                <button>Submit Review</button>
            </form>
        )
    }
}