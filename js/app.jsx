import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

class Header extends React.Component {
  render() {
    return <header className="header">Welcome to my Home</header>
  }
}

class App extends React.Component {
  render(){
    return <div className="wrapper">
            <Header />
            <article className="main">
              <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
            </article>
            <aside className="aside aside-1">Aside 1</aside>
            <aside className="aside aside-2">Aside 2</aside>
            <footer className="footer">Footer</footer>
          </div>
  }
}

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});
