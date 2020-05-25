import React, { Component } from "react";
import "./App.css";

//Components
import ValidationComponent from "./ValidationComponent/ValidationComponent";
import CharComponent from "./CharComponent/CharComponent";

class App extends Component {
	state = {
		paraText: 0,
		user_text: ""
	};

	textChangeHandler = event => {
		this.setState({
			paraText: event.target.value.length,
			user_text: event.target.value
		});
	};

	charClickHandler = index => {
		let temp_charset = this.state.user_text.split("");
		temp_charset.splice(index, 1);
		let user_text = temp_charset.join("");
		this.setState({
			user_text: user_text,
			paraText: user_text.length
		});
	};

	render() {
		let { paraText, user_text } = this.state;
		console.log(this.state);
		return (
			<div className="App">
				<input
					type="text"
					onChange={this.textChangeHandler}
					value={user_text}
				/>
				<p>{paraText}</p>
				<ValidationComponent user_text={paraText} />
				{user_text.split("").map((char_single, index) => {
					return (
						<CharComponent
							key={index}
							my_char={char_single}
							charClicked={() => {
								this.charClickHandler(index);
							}}
						/>
					);
				})}
			</div>
		);
	}
}

export default App;
