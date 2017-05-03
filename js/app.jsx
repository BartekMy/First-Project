import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

class App extends React.Component {
  render(){
    return <h1>My World</h1>
  }
}

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});
