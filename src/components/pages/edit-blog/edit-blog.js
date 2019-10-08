import React, { Component } from "react";
import './edit-blog.css';
import { withBlogstoreService } from "../../hoc/with-blogstore-service";
import ErrorIndicator from "../../error-indicator/error-indicator";
import { Redirect } from 'react-router-dom';

class EditBlog extends Component {
    state = {
        title: '',
        text: '',
        id: undefined,
        errorLink: false,
        edited: false
    };

    onSubmit = (e) => {
        e.preventDefault();
        const post = {
            title: e.target.title.value,
            body: e.target.text.value
        };
        this.props.blogstoreService.editBlog(post, this.state.id)
            .then(value => {
                if (value.ok) {
                   this.setState( { edited: true });
                }
            });
    };


    onChange = (e) => {
        this.setState( {
            [e.target.name]: e.target.value
        });
    };

    componentDidMount() {
        const { blogstoreService, blogId } = this.props;
        blogstoreService.getBlogWithComments(blogId)
            .then(value => {
                if (value.title) {
                    this.setState({
                        title: value.title,
                        text: value.body,
                        id: value.id
                    });
                } else {
                    this.setState({
                        errorLink: true
                    });
                }

            });
    }

    render() {
        const { title, text, errorLink, edited, id } = this.state;

        if (edited) {
            return <Redirect to={`/posts/${id}`}/>
        }

        if ( errorLink) {
            return <ErrorIndicator
                text='I can not edit this blog. Check link or it is problem with our server :('/>;
        }

        return (
            <form className='add_blog_form' onSubmit={this.onSubmit}>
                <input className='add_blog_title center' value={title} onChange={this.onChange}
                       type="text" required name='title' placeholder='title'/>
                <textarea className='add_blog_text center' value={text} onChange={this.onChange}
                          name="text" required placeholder='blog text' />
                <input className='add_blog_button center' type="submit" value='edit blog'/>
            </form>
        );
    }
}

export default withBlogstoreService()(EditBlog);
