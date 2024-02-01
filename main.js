const btnPostId = document.getElementById('getPostId');
const usersPosts =  document.getElementById('usersPosts');
btnPostId.addEventListener('click', () => {
    const postID = document.getElementById('postId').value;
    const divPost = document.querySelector(".user-post--container");
    if(postID > 0 && postID <= 100){
        if(divPost){
            if (divPost.id !== postID) {
             usersPosts.removeChild(divPost)
             getPost(postID);
            }
         } else {
             getPost(postID);
         }
    } 
});

function getPost(postID) {
    const getData = new Promise((resolve,reject) => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postID}`)
        .then(response => {
            if (!response.ok){
               reject(new Error('Cервер ушел за печенькой'));
            } else resolve(response);
        })
        .catch(error => {
            alert('Что то пошло не так');
        })
    });

    getData.catch(alert);

    getData.then((response) => {
        return response.json();
    }).then((post) => {
        const postValue = post;
        const divPost = document.createElement('div');
        const divPostUser = document.createElement('div');
        divPost.className = 'user-post--container';
        divPostUser.className = 'user-post'
        divPost.id = postValue.id;
        divPostUser.innerHTML = `<div class="post-title"><h3>${postValue.title}</h3></div>`
        divPostUser.innerHTML += `<div class="post-content">${postValue.body}</div>`
        divPostUser.innerHTML += `<button type='button' class="user-post--comments">Показать комментарии</button>`
        divPost.append(divPostUser);
        usersPosts.append(divPost);
        const userPostComBtn = document.querySelector(".user-post--comments");
        userPostComBtn.addEventListener('click', () => {
            const commentsPosts = document.querySelector(".users-comments");
            if (commentsPosts){
                divPost.removeChild(commentsPosts);
            }
            const getDataComments = new Promise((resolve) => {
                fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postValue.id}`)
                .then(response => {
                    if (!response.ok){
                       reject(new Error('Cервер ушел за печенькой'));
                    } else resolve(response);
                })
                .catch(error => {
                    alert('Что то пошло не так');
                })
            });

            getData.catch(alert);

            getDataComments.then((response) => {
                return response.json();
            }).then((comments) => {
                const commentsValue = comments;
                const commentsPosts = document.createElement('div');
                commentsPosts.className = 'users-comments';
                commentsValue.forEach(element => {
                    const commentsPost = document.createElement('div');
                    commentsPost.className = 'users-comment' 
                    commentsPost.innerHTML = `<h3 class="comment-title">${element.name}</h3>`
                    commentsPost.innerHTML += `<a href="${element.email}">${element.email}</a>`
                    commentsPost.innerHTML += `<p class="comments-content">${element.body}</p>`
                    commentsPosts.append(commentsPost);
                });
                divPost.append(commentsPosts);
            }); 
        })
    });
};
