console.log('you are linked');
// query selectors for the correlating information to be stored
const usernameInput = document.getElementById('username');
const titleInput = document.getElementById('title');
const storyInput= document.getElementById('story');
const submitBtn= document.getElementById('save');

// add an event listener to the submit button and save the object to the local storage on the form page
submitBtn.addEventListener('click', function(){
    // event.preventDefault();
    // Retrieve existing blog posts from local storage or initialize an empty array
    let existingBlogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
    
    
    const newblogPost={
        username: usernameInput.value,
        title: titleInput.value,
        story: storyInput.value,
    };
    // add the new blog post to the existing blog posts array and put it at the top of the page
    existingBlogPosts.unshift(newblogPost);
// save the updated blog posts array back to the local storage 
    localStorage.setItem('blogPosts', JSON.stringify(existingBlogPosts));
    // display the blog posts
    displayBlog();
});

// alert if any form section is left blank
// submitBtn.addEventListener.apply('click', function sendAlert(eventD))