import React from 'react';

export class AddPostForm extends React.Component {
    state = {
        title: '',
        body: ''
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addNewPost(this.state.title, this.state.body);
        this.setState( {title: '', body: ''} );
    }

    onChangeTitle = (e) => this.setState( {title: e.target.value} );

    onChangeBody = (e) => this.setState( {body: e.target.value} );

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <label for="title">Title</label>
                    <input type="text" id="title" value={this.state.title} onChange={this.onChangeTitle}/>
                    <textarea type="text" value={this.state.body} onChange={this.onChangeBody}/>
                    <input type="submit" value="Post"/>
                </form>
            </div>
        )
    }
}

export default AddPostForm;
