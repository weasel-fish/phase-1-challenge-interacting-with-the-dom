function plusOne() {
    let counter = parseInt(document.querySelector('#counter').textContent, 10)
    counter += 1
    document.querySelector('#counter').textContent = counter
}

function minusOne() {
    let counter = parseInt(document.querySelector('#counter').textContent, 10)
    counter -= 1
    document.querySelector('#counter').textContent = counter
}

function addLike() {
    let counter = document.querySelector('#counter').textContent
    let liked = document.querySelector(`#a${counter}`)

    if(document.querySelector(`#a${counter}`) === null) {
        let li = document.createElement('li')
        li.setAttribute('id', `a${counter}`)
        li.setAttribute('data-num', 1)
        li.textContent = `${counter} has been liked 1 time`
        document.querySelector('.likes').append(li)
    } else {
        let num = parseInt(liked.getAttribute('data-num')) + 1
        console.log(num)
        liked.textContent = `${counter} has been liked ${num} times`
        liked.setAttribute('data-num', num)
    }
}

function pause() {
    console.log(typeof state, state)
    if(state === 'playing') {
        document.querySelector('#plus').disabled = true
        document.querySelector('#minus').disabled = true
        document.querySelector('#heart').disabled = true
        document.querySelector('#submit').disabled = true
        clearInterval(timer)
        document.querySelector('#pause').textContent = 'resume'
        state = 'paused'
    } else {
        document.querySelector('#plus').disabled = false
        document.querySelector('#minus').disabled = false
        document.querySelector('#heart').disabled = false
        document.querySelector('#submit').disabled = false
        timer = setInterval(plusOne, 1000)
        document.querySelector('#pause').textContent = 'pause'
        state = 'playing'
    }
}

function postComment(event) {
    event.preventDefault()
    let commentText = document.querySelector('#comment-input').value
    comment = document.createElement('p')
    comment.textContent = commentText
    document.querySelector('.comments').append(comment)
}

document.querySelector('#plus').addEventListener('click', plusOne)
document.querySelector('#minus').addEventListener('click', minusOne)
document.querySelector('#heart').addEventListener('click', addLike)
document.querySelector('#pause').addEventListener('click', pause)
document.querySelector('#submit').addEventListener('click', postComment)
let state = 'playing'
let timer = setInterval(plusOne, 1000)

