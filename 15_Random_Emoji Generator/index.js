let emoji = document.getElementById('emoji')
let des = document.getElementById('des')
let result

async function fetchEmoji(){
    let res = await fetch('https://emoji-api.com/emojis?access_key=4c49d2948807dd53cbb47f479eeea9ef0ba1415c')
    result = await res.json()
}

fetchEmoji()

emoji.addEventListener('click', () => {
    let random = Math.floor(Math.random() * result.length)
    let description = result[random].unicodeName.split('.')
    let des2 = description[1].substring(2,description[1].length)
    emoji.innerHTML = result[random].character
    des.innerHTML = des2
})