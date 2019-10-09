import React from 'react';
import './app.css';
import AllBlog from "../pages/all-blog/all-blog";
import { Route } from "react-router-dom";
import BlogItem from "../pages/blog-item/blog-item";
import AppHeader from "../pages/app-header/app-header";
import AddBlog from "../pages/add-blog/add-blog";
import EditBlog from "../pages/edit-blog/edit-blog";

const App = () => {
    return (
        <div className='main'>
            <AppHeader/>
            <Route path='/main' exact component={AllBlog} />
            <Route path='/add-blog' exact component={AddBlog} />
            <Route path='/posts/:id' exact component={({ match }) => {
                return <BlogItem blogId={match.params.id} />; }} />
            <Route path='/edit/:id' exact component={({ match }) => {
                return <EditBlog blogId={match.params.id} />; }} />
        </div>
    );
};

export default App;
