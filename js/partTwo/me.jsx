import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){
const homeTextHeading = "Welcome Zombie-Apocalypse Survivor!"
const livingRoomText = "I finished a Training or better called Bootcamp to become a Front-End Developer at Coders Lab. I learned a lot about HTML, CSS, Javascript, jQuery, ECMAScript 6, React, RWD, Sass and Git to start my new job experience."
const livingRoomTextHeading = "Training at Coders Lab  03/2017 - 04/2017"
const livingRoomTextHeading2 = "Language"
const livingRoomText2 = "I speak three languages. My native language German, Polish which I also speak on a native level because I grew bilingual and as you can see my English is also pretty good."
const officeExperienceHeading = "Experience"
const officeExperience1Header = "Becton Dickinson Polska Sp. z o.o.  01/2016 - 02/2017"
const officeExperience1Text = "Customer Service Complaints Handling Representative for the GSA markets (Germany, Switzerland and Austria)"
const officeExperience2Header = "Irkutsk State Linguistic University, Irkutsk, Russia  09/2015 - 09/2015"
const officeExperience2Text = "Internship as a teacher of German language"
const officeExperience3Header = "Stadtwerke Zittau GmbH, Zittau, Germany  09/2014 - 10/2014"
const officeExperience3Text = "Interpreter (Polish – German, German – Polish)"
const officeExperience4Header = "Bernd Jorkisch GmbH & Co. KG, Daldorf, Germany  11/2006 - 06/2011"
const officeExperience4Text = "Dispatcher - Planning and organizing transports by road to South Germany and Europe (Forwarding and Logistics Services)."
const officeEducationHeading = "Education"
const officeEducationHeader = "Hochschule Zittau / Görlitz - University of Applied Sciences  09/2011 - 11/2015"
const officeEducationText = "BA in translation English / Polish Bachelor thesis: Software localization - General theoretical introduction and the practical implementation on the basis of chosen digital games"

class Header extends React.Component {
  render() {
    return <header className="header">Welcome to my Home</header>
  }
}

class Textfield_home extends React.Component {
  render() {
    return <div className="textfield_home">
            <h1>{homeTextHeading}</h1>
            <p>My name is Bartosz Mylka and this is my first project as a Front-End Developer. Feel free to have a look on it but its not finished yet. In my <a href="#living_room">living room</a> and <a href="#office">office</a> you will find more Information about me. You can also download my CV in English, German or Polish. Just click on one of the flags.</p>
            <div className="flags">
              <a className="uk" download href="./pdf/Bartosz_Mylka_CV_ENG.pdf"/>
              <a className="germany" download href="./pdf/Bartosz_Mylka_CV_DE.pdf"/>
              <a className="poland" download href="./pdf/Bartosz_Mylka_CV_PL.pdf"/>
            </div>
          </div>
  }
}

class Textfield_living_room extends React.Component {
  render() {
    return <div className="textfield_living_room">
            <h1>{livingRoomTextHeading}</h1>
            <div className="icons">
              <div className="html5"/>
              <div className="css3"/>
              <div className="js"/>
              <div className="jQuery"/>
              <div className="react"/>
              <div className="sass"/>
              <div className="git"/>
            </div>
            <p>{livingRoomText}</p>
            <h2>{livingRoomTextHeading2}</h2>
            <p>{livingRoomText2}</p>
            <h3>Check out my <a href="#office">My Office</a> to find more about my previous job experience and education.</h3>
          </div>
  }
}

class Textfield_office extends React.Component {
  render() {
    return <div className="textfield_office">
            <h1>{officeExperienceHeading}</h1>
            <h2>{officeExperience1Header}</h2>
            <p>{officeExperience1Text}</p>
            <h2>{officeExperience2Header}</h2>
            <p>{officeExperience2Text}</p>
            <h2>{officeExperience3Header}</h2>
            <p>{officeExperience3Text}</p>
            <h2>{officeExperience4Header}</h2>
            <p>{officeExperience4Text}</p>
            <h1>{officeEducationHeading}</h1>
            <h2>{officeEducationHeader}</h2>
            <p>{officeEducationText}</p>
          </div>
  }
}

class Textfield_contact extends React.Component {
  render() {
    return <div className="textfield_contact">
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
            <div className="li_icon">
              <div className="linkedin" />
              <a href="https://linkedin.com/in/bartosz-mylka">linkedin.com/in/bartosz-mylka</a>
            </div>
            <div className="gh_icon">
              <div className="github" />
              <a href="https://github.com/BartekMy">github.com/BartekMy</a>
            </div>
          </div>
  }
}

class Article extends React.Component {
constructor(props){
  super(props);
    this.state = {
      showTextfield_home: false,
      showTextfield_living_room: false,
      showTextfield_office: false,
      showTextfield_contact: false
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
handleOnMouseEnter4 = () => {
  this.setState({
    showTextfield_contact: true
  })
}

  render(){
    return <article className="main">
            <div id="home" onMouseEnter={this.handleOnMouseEnter1}>
              { this.state.showTextfield_home ? <Textfield_home /> : null }
            </div>
            <div id="living_room" onMouseEnter={this.handleOnMouseEnter2}>
              { this.state.showTextfield_living_room ? <Textfield_living_room /> : null }
            </div>
              <div id="office" onMouseEnter={this.handleOnMouseEnter3}>
                { this.state.showTextfield_office ? <Textfield_office /> : null }
              </div>
              <div id="contact" onMouseEnter={this.handleOnMouseEnter4}>{ this.state.showTextfield_contact ? <Textfield_contact /> : null }
              </div>
    </article>
  }
}

class Navigation extends React.Component {
  render() {
    return <ul className="navigation">
            <li><a href="#home">Home</a></li>
            <li><a href="#living_room">Living Room</a></li>
            <li><a href="#office">My Office</a></li>
            <li><a className="contactBtn" href="#contact">Contact</a></li>
          </ul>
  }
}

class Aside extends React.Component {
  render() {
    return <nav className="aside">
              <div className="sticky">
                <Navigation />
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
                <div className="li_icon">
                  <div className="linkedin" />
                  <a href="https://linkedin.com/in/bartosz-mylka">linkedin.com/in/bartosz-mylka</a>
                </div>
                <div className="gh_icon">
                  <div className="github" />
                  <a href="https://github.com/BartekMy">github.com/BartekMy</a>
              </div>
            </div>
          </nav>
  }
}

class Footer extends React. Component {
  handleOnClick = () => {
    document.location = "../First-Project/index.html";
  }

  render() {
    return <footer className="footer">
            <a href="#" className="village" onClick={this.handleOnClick}>RETURN TO THE ZOMBIEGAME</a>
            <p className="copy">Copyright &copy; 2017 Bartosz Mylka All rights reserved.</p>
          </footer>
  }
}

class App extends React.Component {
  render(){
    return <div className="flexbox">
            <Header />
            <Article />
            <Aside />
            <Footer />
          </div>
  }
}

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});
