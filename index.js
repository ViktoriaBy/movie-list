document.querySelector('form').addEventListener('submit', addMovie);
let message = document.querySelector('#message')

//ADD MOVIE

function addMovie(e){
    e.preventDefault();
    let inputField = document.querySelector('input');

    let movie = document.createElement('li');

    let movieTitle = document.createElement('span');
    movieTitle.textContent = inputField.value;
    movieTitle.addEventListener('click', crossOfMovie);
    movie.appendChild(movieTitle);

    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'x';
    deleteBtn.addEventListener('click', deleteMovie);
    movie.appendChild(deleteBtn);

    

    let list = document.querySelector('ul');
    list.appendChild(movie);
}


//DELETE FUNCTION

function deleteMovie(e){
    e.target.parentNode.remove();
    //message.textContent = 'Movie deleted!'
    message.textContent = `${e.target.parentNode.firstChild.textContent } deleted`
}

revealMessage()
//CROSS OFF MOVIE

function crossOfMovie(e){
    e.target.classList.toggle('checked'); 

    if(e.target.classList.contains('checked') === true){
        // message.textContent = 'Movie watched'
        message.textContent = `${e.target.textContent } watched already`
    }else{
 //message.textContent = 'Movie added back!'
        message.textContent = `${e.target.textContent } added back`
    }

    revealMessage()
}

function revealMessage(){
    setTimeout(() => {
        message.textContent('hide')
    }, 1000)

    }
       



