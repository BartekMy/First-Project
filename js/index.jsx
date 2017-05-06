import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

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
  },150)
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
    return <TextTyper text="Welcome Player" />
  }
}

    ReactDOM.render(
        <App />,
        document.getElementById('index')
    );
});
