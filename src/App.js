import React from 'react';
import './App.scss';
import Comments from './components/comments/comments';

function App() {
  return (
    <div className="app">
      <nav className="navbar fixed-top navbar-light bg-light">
        <span className="navbar-brand mb-0 h1">React Challenge 101</span>
      </nav>
      <main className="container site-content">
        <div className="row">
          <div className="col-md-12">
            <Comments />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
