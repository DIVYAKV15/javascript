const post_user = new XMLHttpRequest()
post_user.open('get', 'https://jsonplaceholder.typicode.com/posts')
post_user.send()
post_user.onreadystatechange = () => {
    console.log(post_user.readyState);
    if (post_user.readyState == 4) {
        console.log('response received');
        if (post_user.status >= 200 && post_user.status < 300) {
            let user = JSON.parse(post_user.responseText)
            console.log(user);
            user.forEach((i) => {
                content.innerHTML += `
                <tr>
                     <td>${i.userId}</td>
                    <td>${i.id}</td>
                    <td>${i.title}</td>
                    <td>${i.body}</td>
                </tr>  `
            })
        }

    } else {
        console.log('no response');

    }
}

