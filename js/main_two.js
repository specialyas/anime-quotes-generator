//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
document.querySelector('button').addEventListener('click', getRandomQuote)

function getRandomQuote(){
  fetch('https://animechan.vercel.app/api/random')
          .then(response => response.json())
          .then(data =>{
          console.log(data)
        let anime = data.anime
        document.querySelector('#anime').innerText = anime
        character = data.character
        document.querySelector('#character').innerText = character
        quote = data.quote
        document.querySelector('#quote').innerText = quote
          })
        .catch(err => {
          console.log(`error ${err}`)
      });

    }