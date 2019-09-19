import React from 'react';

export class PostItem extends React.Component {
    render() {

        const { title, body, id} = this.props.post;
        
        return (
            <div>
                <h3>{title}</h3>
                <p>{body}</p>
                <button style={buttonStyle} onClick={this.props.deletePost.bind(this, id)}>x</button>
            </div>
        )
    }
}

const buttonStyle = {
    backgroundColor: 'red',
    color: 'white',
    borderRadius: '50%',
    border: 'none'
};

export default PostItem;