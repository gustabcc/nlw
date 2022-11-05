

function creatGame (player1, hour, player2) {
   return `
   <li>
      <img src="./assets/icon-${player1}.svg" alt=${player1}>
      <strong>${hour}</strong>
      <img src="./assets/icon-${player2}.svg" alt=${player2}>
   </li> 
   `
}


let delay = 0;
function creatCard (date, day, games) {
   delay = delay + 0.3;
   return `
   <div class="card" style="animation-delay:${delay}s">
      <h2><span>${day}</span>${date}</h2>
         <ul>
            ${games}
         </ul>
   </div>
   `
}

document.querySelector("#card").innerHTML =    
      creatCard('24/11', 'quinta', 
      creatGame('brazil', '16:00', 'servia')) +
      creatCard('28/11', 'segunda', creatGame('Portugal', '13:00', 'gana')) +
      creatCard('02/12', 'sexta', creatGame('suica', '08:00', 'camaroes'))
