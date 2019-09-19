import React from 'react';
import uuidv4 from 'uuid/v4';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/Header';
import About from './components/pages/About';
import AddPostForm from './components/AddPostForm';
import Posts from './components/Posts';

import './App.css';

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
      id: uuidv4(),
      title, 
      body
    };
    this.setState( {posts: [...this.state.posts, newPost]} );
  }

  deletePost = (id) => {
    this.setState( { posts: [...this.state.posts.filter(post => post.id !== id)] } );
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" render={props => (
            <React.Fragment>
              <AddPostForm addNewPost={this.addNewPost} />
              <Posts posts={this.state.posts} deletePost={this.deletePost} />
            </React.Fragment>
          )}></Route>
          <Route path="/about" component={About} />
        </div>
      </Router>
    );
  }
}

export default App;
