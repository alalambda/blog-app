import React from 'react'
import PostItem from './PostItem';

export class Posts extends React.Component {
    render() {
        return (
            this.props.posts.map(post => 
                <PostItem key={post.id} post={post} deletePost={this.props.deletePost} />
            )
        );
    }
}

export default Posts;
