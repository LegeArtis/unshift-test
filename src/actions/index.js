
const blogLoaded = (newBlog) => {
    return {
        type: 'BLOG_LOADED',
        payload: newBlog
    };
};

export {
    blogLoaded
}
