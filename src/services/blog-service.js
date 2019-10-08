export default class BlogService {
    url = 'https://bloggy-api.herokuapp.com';

    getAllBlog() {
        return  fetch(`${this.url}/posts`)
            .then(value => value.json());
    }

    getBlogWithComments(id) {
        return fetch(`${this.url}/posts/${id}?_embed=comments`)
            .then(value => value.json());
    }

    addComment(data) {
        return fetch(`${this.url}/comments`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
    }

    addBlog(blog) {
        return fetch(`${this.url}/posts`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(blog)
        });
    }

    deleteBlog(id) {
        return fetch(`${this.url}/posts/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    editBlog(blog, id) {
        return fetch(`${this.url}/posts/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(blog)
        })
    }
}
