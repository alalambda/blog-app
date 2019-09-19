import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/Header';
import About from './components/pages/About';
import AddPostForm from './components/AddPostForm';
import Posts from './components/Posts';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
  }

  addNewPost = (title, body) => {
    if (title.length === 0 || body.length === 0) return;
    var newPost = {
      title, 
      body
    };
    this.setState( {posts: [...this.state.posts, newPost]} );
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" render={props => (
            <React.Fragment>
              <AddPostForm addNewPost={this.addNewPost} />
              <Posts posts={this.state.posts} />
            </React.Fragment>
          )}></Route>
          <Route path="/about" component={About} />
        </div>
      </Router>
    );
  }
}

export default App;
