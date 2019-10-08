import React, { Component } from 'react';
import './all-blog.css';
import { withBlogstoreService } from "../../hoc/with-blogstore-service";
import Spinner from "../../spiner/spiner";
import { blogLoaded } from "../../../actions";
import  { connect } from 'react-redux';
import { Link } from "react-router-dom";

class AllBlog extends Component {
    state = {
      blogReady: false,
    };

    componentDidMount() {
        const { blogstoreService, blogLoaded } = this.props;
        blogstoreService.getAllBlog()
            .then(value => {
                blogLoaded(value);
                this.setState( { blogReady: true });
            })
    }

    render() {
        if (!this.state.blogReady) {
            return <Spinner/>;
        }

        const list = this.props.blog.map((item, index) => {
           return (
               <li className='all_blog_element' key={index}>
                   <Link to={`/posts/${item.id}`}>
                           {item.title}
                   </Link>
               </li>
           );
        });

        return (
            <ul className='all_blog_list'>
                { list }
            </ul>
        );
    }
}

const mapStateToProps = ({ blog }) => {
  return { blog };
};

const mapDispatchToProps = {
    blogLoaded
};

export default connect(mapStateToProps, mapDispatchToProps)(
    withBlogstoreService()(AllBlog)
);
