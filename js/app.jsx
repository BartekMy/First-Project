import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

class Article extends React.Component {
  render(){
    return <article className="main">
      <p></p>
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
    return <div className="wrapper">
            <Header />
            <Article />
            <aside className="aside aside-1">Aside 1</aside>

            <footer className="footer">Footer</footer>
          </div>
  }
}

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});
