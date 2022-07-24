//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
document.querySelector('button').addEventListener('click', getQuote)

function getQuote(){
    let selection = document.querySelector('input').value.trim()

   fetch(`https://animechan.vercel.app/api/quotes/anime?title=${selection}`)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        let anime = data[0].anime
        document.querySelector('#anime').innerText = anime
        character = data[0].character
        document.querySelector('#character').innerText = character
        quote = data[0].quote
        document.querySelector('#quote').innerText = quote
      })
      
      .catch(err => {
        console.log(`error ${err}`)
    });
}




// fetch('https://animechan.vercel.app/api/random')
//         .then(response => response.json())
//         .then(data =>{
//           console.log(data)
//           anime = data['anime']
//           document.querySelector('#anime').innerText = anime
//           character = data['character']
//           document.querySelector('#character').innerText = character
//           quote = data['quote']
//           document.querySelector('#quote').innerText = quote

//         })
//       .catch(err => {
//         console.log(`error ${err}`)
//     });

