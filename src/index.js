// Your code here
let movie = "http://localhost:3000/films"
document.addEventListener('DOMContentLoaded', async(event)=>{
const data = await showFilms()
viewPoster(data)
})
ticketsFilm()
function showFilms(){
    return fetch(movie,{
        method:"GET",
        headers:{
            "Content-Type":"application/json",
            "Accept":"application/json"
        }
    })
    .then(res =>res.json())
    .then(data => data)
}

const ul = document.getElementById("films")
function ticketsFilm(){
    return fetch(movie)
    .then(res =>res.json())
    .then(title => title.map(movies =>{
        let li =document.createElement("li");
        li.innerHTML=`
        <div>
        <h2 id="${movies.id}" class="photos">${movies.title}</h2>
        </div>
        `
        ul.appendChild(li)
    }))
}

function viewPoster(data){
    const live = document.querySelector('#live')
    const cont = document.createElement('div')
   const image = document.querySelectorAll(".photos")
   image.forEach(posters =>{
    posters.addEventListener('click',(event)=>{
      const Acquiredfilm = data.find((element)=>element.id === event.target.id)
      cont.innerHTML =`
      <img src=${Acquiredfilm.poster}>`
      live.appendChild(cont)
    })
   })
  }

  function viewMovie(){
return fetch (movie)
.then(res => res.json())
.then(films =>films.map(film=>{
    return`
    const title = ${film.title}
    const runtime = ${film.runtime}
    const description = ${film.description}
    const showtime = ${film.showtime}
    const  capacity = ${film.capacity}
    const ticketSold = ${film.ticket_sold}
    const availableTickets = ${capacity-ticket_sold}   `
}))


  }
