//neste tópico é dada a criação de um input interno do nome dos paises jogadores e o horario que será modificado no main geral
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
  newCard(
    "24/11",
    "quinta",
    newGame("switzerland", "06:00", "cameroon") +
      newGame("uruguay", "09:00", "south korea") +
      newGame("portugal", "12:00", "ghana") +
      newGame("brazil", "15:00", "serbia")
  ) +
  newCard(
    "25/11",
    "sexta",
    newGame("wales", "06:00", "iran") +
      newGame("qatar", "09:00", "senegal") +
      newGame("netherlands", "12:00", "ecuador") +
      newGame("england", "15:00", "united states")
  ) +
  newCard(
    "26/11",
    "sabado",
    newGame("tunisia", "06:00", "australia") +
      newGame("poland", "09:00", "saudi arabia") +
      newGame("france", "12:00", "denmark") +
      newGame("argentina", "15:00", "mexico")
  ) +
  newCard(
    "27/11",
    "domingo",
    newGame("japan", "06:00", "costa rica") +
      newGame("belgium", "09:00", "morocco") +
      newGame("croatia", "12:00", "canada") +
      newGame("spain", "15:00", "germany")
  ) +
  newCard(
    "28/11",
    "segunda",
    newGame("cameroon", "06:00", "serbia") +
      newGame("south korea", "09:00", "ghana") +
      newGame("brazil", "12:00", "switzerland") +
      newGame("portugal", "15:00", "uruguay")
  ) +
  newCard(
    "29/11",
    "terça",
    newGame("ecuador", "06:00", "senegal") +
      newGame("netherlands", "09:00", "qatar") +
      newGame("iran", "12:00", "united states") +
      newGame("wales", "15:00", "england")
  ) +
  newCard(
    "30/11",
    "quarta",
    newGame("tunisia", "06:00", "france") +
      newGame("australia", "09:00", "denmark") +
      newGame("poland", "12:00", "argentina") +
      newGame("saudi arabia", "15:00", "mexico")
  ) +
  newCard(
    "01/11",
    "quinta",
    newGame("croatia", "06:00", "belgium") +
      newGame("canada", "09:00", "morocco") +
      newGame("japan", "12:00", "spain") +
      newGame("costa rica", "15:00", "germany")
  ) +
  newCard(
    "02/11",
    "sexta",
    newGame("south korea", "06:00", "portugal") +
      newGame("ghana", "09:00", "uruguay") +
      newGame("serbia", "12:00", "switzerland") +
      newGame("cameroon", "15:00", "brazil")
  )
