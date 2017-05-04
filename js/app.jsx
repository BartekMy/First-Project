import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

class Navigation extends React.Component {
  render() {
    return <nav className="aside">
            <ul className="navigation">
              <li><a href="#">Home</a></li>
              <li><a href="#">Living Room</a></li>
              <li><a href="#">My Office</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </nav>
  }
}

class Article extends React.Component {
  render(){
    return <article className="main">

    </article>
  }
}

class Header extends React.Component {
  render() {
    return <header className="header">Welcome to my Home</header>
  }
}

class App extends React.Component {
  render(){
    return <div className="flexbox">
            <Header />
            <Article />
            <Navigation />

            <footer className="footer">Footer</footer>
          </div>
  }
}

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});
