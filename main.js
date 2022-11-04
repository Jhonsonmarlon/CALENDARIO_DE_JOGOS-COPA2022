//neste tópico é dada a crianção de um input interno do nome dos paises jogadores e o horario que será modificado no main geral
function newGame(player1, hour, player2) {
  return `
    <li>
      <img src="./assets/bandeiras/${player1}.svg" alt="bandeira de ${player1}">
      <strong>${hour}</strong>
      <img src="./assets/bandeiras/${player2}.svg" alt="bandeira de ${player2}">
    </li>  
  `
}

//neste tópico cria-se novos jogos obs: games refere-se aos jogos que serão adicionados no document.query
let delay = -0.4
function newCard(date, day, games) {
  delay = delay + 0.4
  return `     
    <div class="card" style="animation-delay: ${delay}s">
      <h2>${date}<span>${day}</span></h2>
      <ul>
        ${games}
      </ul>
    </div>
  `
}

//neste tópico é firmada a dinamicidade do id cards, unindo outras functions já criadas para dinamizar os jogos
document.querySelector("#cards").innerHTML =
  newCard("20/11", "domingo", newGame("qatar", "12:00", "ecuador")) +
  newCard(
    "21/11",
    "segunda",
    newGame("england", "09:00", "iran") +
      newGame("senegal", "12:00", "netherlands") +
      newGame("united states", "15:00", "wales")
  ) +
  newCard(
    "22/11",
    "terça",
    newGame("argentina", "06:00", "saudi arabia") +
      newGame("denmark", "09:00", "tunisia") +
      newGame("mexico", "12:00", "poland") +
      newGame("france", "15:00", "australia")
  ) +
  newCard(
    "23/11",
    "quarta",
    newGame("morocco", "06:00", "croatia") +
      newGame("germany", "09:00", "japan") +
      newGame("spain", "12:00", "costa rica") +
      newGame("belgium", "15:00", "canada")
  ) +
  newCard("24/11", "quinta") +
  newCard("25/11", "sexta") +
  newCard("26/11", "sabado") +
  newCard("27/11", "domingo") +
  newCard("28/11", "segunda") +
  newCard("29/11", "terça") +
  newCard("30/11", "quarta") +
  newCard("01/11", "quinta") +
  newCard("02/11", "sexta")
