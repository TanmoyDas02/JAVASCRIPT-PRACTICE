let data = JSON.parse(localStorage.getItem('notes')) || []

function displayNote(){
    data.map((singleNote) => {
        if(singleNote){
            addNote(singleNote)
        }
    })
}

displayNote()

document.getElementById('btn').addEventListener('click', () => {
    addNote();
});

function addNote(note = ''){
    let divEle = document.createElement('div')
    divEle.setAttribute('class', 'singleNote')
    let date = new Date().toLocaleString()
    divEle.innerHTML = `
    <div class="singleNote">
        <div>
            <button id="editBtn"><span class="add ${note ? '' : 'hidden'}">Edit</span><span class="save ${note ? 'hidden' : ''}">Save</span></button>
            <button id="removeBtn">Remove</button>
        </div>
        <div>
            <div class="note ${note ? '' : 'hidden'}" id="div">Hello</div>
            <textarea name="" class="note ${note ? 'hidden' : ''}" id="txtA"></textarea>
        </div>
        <div class="date">${note ? note.date : date}</div>
    </div>
    `
    let editBtn = divEle.querySelector('#editBtn')
    let removeBtn = divEle.querySelector('#removeBtn')
    let txtA = divEle.querySelector('#txtA')
    let div = divEle.querySelector('#div')
    let add = divEle.querySelector('.add')
    let save = divEle.querySelector('.save')

    editBtn.addEventListener('click', () => {
        div.innerHTML = txtA.value
        txtA.classList.toggle('hidden')
        div.classList.toggle('hidden')
        add.classList.toggle('hidden')
        save.classList.toggle('hidden')
    })

    div.innerHTML = note.val || '';
    txtA.innerHTML = note.val || '';
    removeBtn.addEventListener('click', (e) => {
        // e.target.parentnode.parentnode.remove()
        divEle.remove()
        updateStorage()
    })

    txtA.addEventListener('input', (e) => {
        updateStorage()
    })

    document.getElementById('allNote').append(divEle)
}

function updateStorage(){
    let textArea = document.querySelectorAll('textarea')
    let data1 = []
    textArea.forEach((e) => {
        if(e){
            data1.push(e.value)
        }
    })
    data = []
    let date = document.querySelectorAll('.date')
    date.forEach((e, i) => {
        data.push({val : data1[i], date : e.textContent})
    })

    localStorage.setItem('notes', JSON.stringify(data))
}

updateStorage()