const btn = document.getElementById("btn")
const searchText = document.getElementById("searchText")

async function fetchUser(username){
    let response = await fetch(`https://api.github.com/users/${username}`)
    let result = await response.json()
    dispalyUser(result)
}

btn.addEventListener('click', (e) => {
    // e.preventDefault
    let userId = searchText.value
    fetchUser(userId)
})

function dispalyUser(result){

    if(!result.avatar_url){
        document.getElementById('userProfile').innerHTML = `<h1>User Not Found</h1>`
        return
    }

    if(!result.bio){
        result.bio = ''
        return
    }

    document.getElementById('userProfile').innerHTML = `
            <div class="userInfo">
                <img src=${result.avatar_url} class="userImg" alt="">
                <div class="userDetail">
                    <p class="userName">${result.name}</p>
                    <p class="userBio">${result.bio}</p>
                </div>
            </div>
            <div class="userFollow">
                <div class="follower">
                    <div class="repo">
                        <p>Follower</p>
                        <p>${result.followers}</p>
                    </div>
                    <div class="repo">
                        <p>Following</p>
                        <p>${result.following}</p>
                    </div>
                    <div class="repo">
                        <p>Repository</p>
                        <p>${result.public_repos}</p>
                    </div>
                </div>
                <a href=${result.html_url} target='_blank' class="visitProfile">
                    <div>
                        Visit Profile
                    </div>
                </a>
            </div>
    `
}

// const box1 = document.querySelector(".box1"); // Use querySelector for single element selection
// const box2 = document.querySelector(".box2");
// const items = document.querySelectorAll(".item");

// for(let item of items){
//     item.addEventListener('dragstart', (e) => {
//         let data = e.target
//         box2.addEventListener('dragover', (e) => {
//             e.preventDefault();
//             e.stopPropagation();
//         })
//         box2.addEventListener('drop', () => {
//             box2.append(data)
//             data = ''
//         })

//         box1.addEventListener('dragover', (e) => {
//             e.preventDefault();
//             e.stopPropagation();
//         })
//         box1.addEventListener('drop', () => {
//             box1.append(data)
//             data = ''
//         })
//     })
// }