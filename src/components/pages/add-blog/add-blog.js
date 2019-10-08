import React, { Component } from 'react';
import  './add-blog.css';
import { withBlogstoreService } from "../../hoc/with-blogstore-service";

class AddBlog extends Component {
    state = {
        title: '',
        text: ''
    };

    onSubmit = (e) => {
      e.preventDefault();
      const post = {
          title: e.target.title.value,
          body: e.target.text.value
      };
      this.props.blogstoreService.addBlog(post)
          .then(value => {
              if (value.ok) {
                  this.setState({
                      title: '',
                      text: ''
                  });
              }
          });
    };

    onChange = (e) => {
        this.setState( {
            [e.target.name]: e.target.value
        });
    };

    render() {
        const { title, text } = this.state;
        return (
            <form className='add_blog_form' onSubmit={this.onSubmit}>
                <input className='add_blog_title center' value={title} onChange={this.onChange}
                       type="text" required name='title' placeholder='title'/>
                <textarea className='add_blog_text center' value={text} onChange={this.onChange}
                          name="text" required placeholder='blog text' />
                <input className='add_blog_button center' type="submit" value='add blog'/>
            </form>
        );
    }
}

export default withBlogstoreService()(AddBlog);
