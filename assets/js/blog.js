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
        let usernameElement = document.createElement('h3');
        usernameElement.textContent = `${blogPost.username}`;

        let titleElement = document.createElement('h2');
        titleElement.textContent = blogPost.title;

        let storyElement = document.createElement('p');
        storyElement.textContent = blogPost.story;
        // loop through the blog post data and create a box for each post
        const blogBox = document.createElement('div');
        blogBox.classList.add('blog-box');
        blogBox.innerHTML=`
        <h2>${blogPost.title}</h2>
        <p>${blogPost.story}</p>
        <h3>posted by ${blogPost.username}</h3>`;

// append them to the blog element
        
        blog.appendChild(blogBox);
        // blog.appendChild(storyElement);
        // blog.appendChild(usernameElement);
    });
    console.log('Blog posts displayed successfully.');
}

displayBlog();

