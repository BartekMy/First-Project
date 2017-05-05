import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

class Footer extends React. Component {
  handleOnClick = () => {
    window.location = "../First-Project/index.html";
  }

  render() {
    return <footer className="footer">
            <a href="#" className="village" onClick={this.handleOnClick}>Lets go back to my village</a>
            <p className="copy">Copyright &copy; 2017 Bartosz Mylka</p>
          </footer>
  }
}

class Navigation extends React.Component {
  render() {
    return <nav className="aside">
            <div className="sticky">
            <ul className="navigation">
              <li><a href="#home">Home</a></li>
              <li><a href="#living_room">Living Room</a></li>
              <li><a href="#office">My Office</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
            <div className="adress">
            <div className="pin" />
            <p>Bartosz Mylka<br/>ul. Przestrzenna 41/2<br/>50-534 Wroclaw</p>
            </div>
            <div className="email">
            <div className="gmail" />
            <p>bmylka@gmail.com</p>
            </div>
            <div className="linkedin">
            <div className="li_icon" />
            <p>linkedin.com/in/bartosz-mylka</p>
            </div>
            </div>
          </nav>
  }
}

class Article extends React.Component {
  render(){
    return <article className="main">
            <div id="home" />
            <div id="living_room" />
            <div id="office" />
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
            <Footer />
          </div>
  }
}

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});
