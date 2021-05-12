import React from 'react';

class ShouldComponentUpdate extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            name: "Ankur"
        }
    }

    change = () => {
        this.setState({
            name: this.state.name == "Ankur" ? "Mukesh" : "Ankur"
        })
    }

    shouldComponentUpdate() {
        console.log("bilkul bhai");
        return false;
    }

    componentDidMount() {
        console.log("component did mount");
    }

    componentDidUpdate() {
        console.log("component did update");
    }

    render() {
        return (
            <>
                <br /><br /><br />
                {this.state.name}
                <button onClick={this.change}>Change</button>
                <br /><br />
                <Child />
            </>
        )
    }
}

class Child extends React.Component{

    componentDidUpdate() {
        console.log("component did update child");
    }

    render() {
        return (
            <>
                {console.log("child called")}
                Child
            </>
        )
    }
}

export default ShouldComponentUpdate;