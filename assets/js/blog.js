// need to make a button to go back to previous page
document.getElementById("backbutton").addEventListener('click', function(){
    window.history.back()
})


// recall the local storage inforamtion and append it on the page

const displayBlog = function() {
    let blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
    let blog = document.querySelector('#blog');
    
// iterate over each blog post and create elements for the username, title and story
    blogPosts.forEach(function(blogPost) {
        let usernameElement = document.createElement('h2');
        usernameElement.textContent = `${blogPost.username}`;

        let titleElement = document.createElement('h3');
        titleElement.textContent = blogPost.title;

        let storyElement = document.createElement('p');
        storyElement.textContent = blogPost.story;
// append them to the blog element
        blog.appendChild(usernameElement);
        blog.appendChild(titleElement);
        blog.appendChild(storyElement);
    });
}

displayBlog();

