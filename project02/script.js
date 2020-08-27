const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');
let ticketPrice = +movieSelect.value;



populateUI();

// pull data from local storage to build UI.
function populateUI() {
    const a = JSON.parse(localStorage.getItem('keyArray'));
    if (a !== null && a.length > 0)

    {
        seats.forEach((s, i) => {
            if (a.indexOf(i) > -1) {
                s.classList.add('selected');
            }

        })

    }

    const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');
    if (selectedMovieIndex !== null)

    {

        movieSelect.selectedIndex = selectedMovieIndex;
    }

}

updateSelectedSeats();




// Functions to ceate update seats.
function updateSelectedSeats() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    const countSelectedSeats = selectedSeats.length;
    count.innerText = countSelectedSeats;
    total.innerText = ticketPrice * countSelectedSeats;
    const seatArray = [...selectedSeats].map(seat => [...seats].indexOf(seat));
    localStorage.setItem('keyArray', JSON.stringify(seatArray));
}




// Function to Store Moviedata alongwith index

function setMovieData(movieIndex, moviePrice) {
    localStorage.setItem('selectedMovieIndex', movieIndex);
    localStorage.setItem('selectedMoviePrice', moviePrice);
}

// Event listner for change on select of Movie select drop down from MovieSelect...container
movieSelect.addEventListener('change', changeable => {
    ticketPrice = +changeable.target.value;
    updateSelectedSeats();
    setMovieData(changeable.target.selectedIndex, changeable.target.value);
})


// Event listner for click on avaiable seats
container.addEventListener('click', (pick) => {
    if (pick.target.classList.contains('seat') && !pick.target.classList.contains('occupied')) {
        pick.target.classList.toggle('selected');
        updateSelectedSeats();

    }
})