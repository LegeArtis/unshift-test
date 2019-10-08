const initialState = {
    blog: []
};

const reducer = ( state = initialState, actions) => {
    switch (actions.type) {
        case 'BLOG_LOADED':
            return {
                blog: actions.payload
            };

        case 'BLOG_DELETE':
            return {
                blog: actions.payload
            };

        default:
            return state;
    }
};

export default reducer;
