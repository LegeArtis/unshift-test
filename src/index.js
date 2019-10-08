import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import App from "./components/app/app";
import BlogService from "./services/blog-service";
import store from "./store";
import ErrorBoundry from "./components/error-boundry/error-boundry";
import { BlogstoreServiceProvider } from './components/blogstore-service-context/blogstore-service-context';

const blogstoreService = new BlogService();

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>
            <BlogstoreServiceProvider value={blogstoreService}>
                <Router>
                    <App />
                </Router>
            </BlogstoreServiceProvider>
        </ErrorBoundry>
    </Provider>,
    document.getElementById('root')
);

