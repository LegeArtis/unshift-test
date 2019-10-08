import React from 'react';
import { BlogstoreServiceConsumer } from "../blogstore-service-context/blogstore-service-context";

const withBlogstoreService = () => (Wrapped) => {

    return (props) => {
        return (
            <BlogstoreServiceConsumer>
                {
                    (blogstoreService) => {
                        return (
                            <Wrapped { ...props} blogstoreService={blogstoreService} />
                        );
                    }
                }
            </BlogstoreServiceConsumer>
            );
    }
};

export { withBlogstoreService };
