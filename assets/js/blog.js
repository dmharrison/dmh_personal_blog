// recall the local storage inforamtion and append it on the page


const displayBlog = function() {
    let blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
    let blog = document.querySelector('#blog');
    

    blogPosts.forEach(blogPost => {
        let usernameElement = document.createElement('h2');
        usernameElement.textContent = `Author: ${blogPost.username}`;

        let titleElement = document.createElement('h3');
        titleElement.textContent = blogPost.title;

        let storyElement = document.createElement('p');
        storyElement.textContent = blogPost.story;

        blog.appendChild(usernameElement);
        blog.appendChild(titleElement);
        blog.appendChild(storyElement);
    });
}

displayBlog();