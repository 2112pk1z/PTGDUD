import React from "react";
class Childcomponent extends React.Component {

    handleInput = (event) => {
        console.log(event.target.value);
        this.setState({
            valueInput: event.target.value
        })
    }

    handleOnchangeInput = (event) => {
        console.log(event.target.value);
        this.setState({
            Name: event.target.value
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault();
        console.log(this.state)
    }

    constructor(props) {
        super(props);
        this.state = {
            valueInput: 'abc'
        }
    }

    render() {
        let {Name}=this.state;
        return (
            <>
                <div>
                    My name is: {Name} <br />
                    Address: HCM
                    <form action="" onSubmit={(event) => this.handleOnSubmit(event)}>
                        <input type="text" 
                            onChange={(event) => this.handleOnchangeInput(event)} />
                        <br />
                        <button>Submit</button>
                    </form>
                </div>
            </>
        );
    };
}
export default Childcomponent;
