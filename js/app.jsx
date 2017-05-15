import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){
const homeTextHeading = "Welcome Zombie-Apocalypse Survivor!"
const livingRoomText = "I finished a Training or better called Bootcamp to become a Front-End Developer at Coders Lab. I learned a lot about HTML, CSS, Javascript, jQuery, ECMAScript 6, React, RWD, Sass and Git to start my new job experience."
const livingRoomTextHeading = "Training at Coders Lab 03/2017 - 04/2017"
const livingRoomTextHeading2 = "Language"
const livingRoomText2 = "I speak three languages. My native language German, Polish which I also speak on a native level because I grew bilingual and as you can see my English is also pretty good."


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
              { this.state.showTextfield_home ? <div className="textfield"><h1>{homeTextHeading}</h1><p>My name is Bartosz Mylka and this is my first project as a Front-End Developer. Feel free to have a look on it but its not finished yet. In my <a href="#living_room">living room</a> and <a href="#office">office</a> you will find more Information about me.</p></div> : null }
            </div>
            <div id="living_room" onMouseEnter={this.handleOnMouseEnter2}>
              { this.state.showTextfield_living_room ? <div className="textfield"><h1>{livingRoomTextHeading}</h1><p>{livingRoomText}</p><h2>{livingRoomTextHeading2}</h2><p>{livingRoomText2}</p><h3>Check out my <a href="#office">My Office</a> to find more about my previous job experience and education.</h3></div> : null }
            </div>
            <div>
              <div id="office" onMouseEnter={this.handleOnMouseEnter3}>
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
