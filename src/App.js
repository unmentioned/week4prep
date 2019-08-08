
import React from 'react';
import './App.css';

//Define a component called App
class App extends React.Component {
  //Initializes a few values for this component
  constructor() {
    super();

    //Set the state of a variable called title, included other examples
    this.state = {
      title: "Sleep",
      number: 2
    }

    //Binds this function to this compoenent instance
    //Don't worry if you don't understand
    this.update = this.update.bind(this);

  }

  // Function to handle the button click
  update() {
    //Switch statement to handle the multiple values that title can have
    switch (this.state.title) {
      case "Sleep":
        //This method is used to update the value of the state
        this.setState({ title: "Study" })
        break;

      case "Study":
        this.setState({ title: "Party" })
        break;

      case "Party":
        this.setState({ title: "Sleep" })
        break;
    }
  }

  // The render methods defines what is rendered in this component
  render() {
    //The render method MUST return a single html element
    return (
      <div>
        {/* A heading which renders the value of the title property */}
        <h1>{this.state.title}</h1>
        {/* Button that triggers this.update when clicked */}
        <button onClick={this.update}>Done</button>
      </div>
    )
  }


}

export default App;
