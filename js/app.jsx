import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

class Footer extends React. Component {
  handleOnClick = () => {
    window.location = "../First-Project/index.html";
  }

  render() {
    return <footer className="footer">
            <a href="#" className="village" onClick={this.handleOnClick}>Lets go back to Zombieville</a>
            <p className="copy">Copyright &copy; 2017 Bartosz Mylka All rights reserved.</p>
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
            <a href="mailto:bmylka@gmail.com">bmylka@gmail.com</a>
            </div>
            <div className="phone">
            <div className="number" />
            <p>+48 504 505 230</p>
            </div>
            <div className="linkedin">
            <div className="li_icon" />
            <a href="https://linkedin.com/in/bartosz-mylka">linkedin.com/in/bartosz-mylka</a>
            </div>
            <div className="github">
            <div className="gh_icon" />
            <a href="https://github.com/BartekMy">github.com/BartekMy</a>
            </div>
            </div>
          </nav>
  }
}

class Article extends React.Component {
constructor(props){
  super(props);
    this.state = {
      showTextfield_home: false,
      showTextfield_living_room: false,
      showTextfield_office: false
    }
  }


handleOnMouseEnter1 = () => {
  this.setState({
    showTextfield_home: true
  })
}
handleOnMouseEnter2 = () => {
  this.setState({
    showTextfield_living_room: true
  })
}
handleOnMouseEnter3 = () => {
  this.setState({
    showTextfield_office: true
  })
}
  render(){
    return <article className="main">
            <div id="home" onMouseEnter={this.handleOnMouseEnter1}>
              { this.state.showTextfield_home ? <div className="textfield" /> : null }
            </div>
            <div id="living_room" onMouseEnter={this.handleOnMouseEnter2}>
              { this.state.showTextfield_living_room ? <div className="textfield" /> : null }
            </div>
            <div id="office">
              <div id="living_room" onMouseEnter={this.handleOnMouseEnter3}>
                { this.state.showTextfield_office ? <div className="textfield" /> : null }
              </div>
            </div>
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
