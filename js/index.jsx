import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){
let text = "Welcome Player, use Arrow-Keys to move the Recruiter on his search for the perfect Job Candidate. Watch out for the Zombie! The only save place to hide is the Job Candidates house!";
class TextTyper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: this.props.text[0]
    }
  }
componentDidMount() {
let length = 1;
    setInterval(()=>{
    length++;
    this.setState({
      message: this.props.text.slice(0, length)
    })
  },25)
}
componentWillUnmount(){
      clearInterval(this.intervalId);
    }
  render() {
    return <h1>{this.state.message}</h1>;
  }
}

class App extends React.Component {

  render(){
    return <TextTyper text={text} />
  }
}

    ReactDOM.render(
        <App />,
        document.getElementById('index')
    );
});
