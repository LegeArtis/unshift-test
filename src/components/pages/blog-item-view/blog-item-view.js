import React, { Component } from 'react';
import './blog-item-view.css'
import { Link } from "react-router-dom";

class BlogItemView extends Component {

    render() {
        const { blog, onSubmit, deleteBlog } = this.props;
        const comments = blog.comments.map((item, index) => {
            return (
                <li className='comments_li' key={index}>
                    {item.body}
                </li>
            );
        });

        return (
            <div className='blog_view_block'>
                <div className='blog_view_edit_block'>
                    <button className='blog_view_edit_btn'>
                        <Link to={`/edit/${blog.id}`}>edit</Link>
                    </button>
                    <button className='blog_view_edit_btn' onClick={deleteBlog}>delete</button>
                </div>
                <h1 className='blog_view_header'> { blog.title } </h1>
                <p className='blog_view_body'> {blog.body} </p>
                <h2 className='blog_view_header'>Comments</h2>
                <ul>
                    {comments}
                </ul>
                <form className='comments_form' onSubmit={onSubmit}>
                    <textarea className='blog_view_input' required name='comment' placeholder='comments'/>
                    <input className='blog_view_button' type="submit" value='send'/>
                </form>
            </div>
        );
    }
}

export default BlogItemView;
