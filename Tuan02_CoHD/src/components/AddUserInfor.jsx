import React from "react";

class AddUserInfor extends React.Component {

    state = {
        Name: "",
        Age: ""
    };

    handleOnSubmit = (event) => {
        event.preventDefault(); 

        this.props.handleAddnewUser({
            id: Math.floor((Math.random() * 100) + 1) + "user",
            Name: this.state.Name,
            Age: this.state.Age
        });
        this.setState({ Name: "", Age: "" });
    };

    handleOnChangeInput = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    render() {      
        return (
            <form onSubmit={this.handleOnSubmit}>
                <label>Name:</label>
                <input
                    type="text"
                    name="Name"
                    value={this.state.Name}
                    onChange={this.handleOnChangeInput}
                />
                <br />

                <label>Age:</label>
                <input
                    type="text"
                    name="Age"
                    value={this.state.Age}
                    onChange={this.handleOnChangeInput}
                />
                <br />

                <button type="submit">Submit</button>
            </form>
        );
    }
}

export default AddUserInfor;