import React, { Component } from 'react';
import './blog-item.css';
import Spinner from "../../spiner/spiner";
import { withBlogstoreService } from "../../hoc/with-blogstore-service";
import ErrorIndicator from "../../error-indicator/error-indicator";
import BlogItemView from "../blog-item-view/blog-item-view";
import { Redirect } from 'react-router-dom';

class BlogItem extends Component {
    state = {
        blogReady: false,
        blogItem: undefined,
        errorLink: false,
        redirect: false
    };

    componentDidMount() {
        const { blogstoreService, blogId } = this.props;
        blogstoreService.getBlogWithComments(blogId)
            .then(value => {
                if (value.title) {
                    this.setState({
                        blogReady: true,
                        blogItem: value
                    });
                } else {
                    this.setState({
                        blogReady: true,
                        errorLink: true
                    });
                }

            });
    }

    deleteBlog = (e) => {
        const { blogstoreService, blogId } = this.props;
        blogstoreService.deleteBlog(blogId)
            .then(value => {
                if (value.ok) {
                    this.setState({ redirect : true })
                }
            });
    };

    onSubmit = (e) => {
        e.preventDefault();
        const comment = {
           postId: this.state.blogItem.id,
           body: e.target.comment.value
        };
        this.props.blogstoreService.addComment(comment)
            .then(value => {
                if (value.ok) {
                    this.setState(({ blogItem }) => {
                        return {
                            blogItem: {...blogItem, comments: [...blogItem.comments, comment]}
                        }

                    })
                }
            });

        e.target.comment.value = '';

    };

    render() {
        const { blogReady, blogItem, errorLink, redirect } = this.state;
        if (!blogReady) {
            return <Spinner />;
        }

        if (redirect) {
            return <Redirect to='/main' />
        }

        if ( errorLink) {
            return <ErrorIndicator
                text='I can not download this blog. Check link or it is problem with our server :('/>;
        }

        return <BlogItemView blog={blogItem} onSubmit={this.onSubmit}
                             deleteBlog={this.deleteBlog} />;
    }
}




export default withBlogstoreService()(BlogItem);
