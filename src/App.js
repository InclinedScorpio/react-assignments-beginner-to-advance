import React, { Component } from "react";
import "./App.css";

//components
import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";

class App extends Component {
	state = {
		username: "ashu@gmail.com"
	};

	changeUsernameHandler = event => {
		this.setState({
			username: event.target.value
		});
	};

	render() {
		let { username } = this.state;
		return (
			<div className="App">
				<UserInput change={this.changeUsernameHandler} name={username} />
				<UserOutput p1={username} />
			</div>
		);
	}
}

export default App;
