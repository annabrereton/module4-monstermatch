// Monster Match
function getRandomMonster() {
    let monsterNames = {
        Lucius: 13,
        Growler: 8.9,
        Neal: 9.9,
        Medusa: 11.11,
        Stormwind: 10.5
    }
    const randMonster = Object.entries(monsterNames)
    return randMonster[Math.floor(Math.random() * randMonster.length)];
}

function getRandomMonsterType() {
    let monsterTypes = {
        Vampire: 5,
        Werewolf: 7,
        Goblin: 8,
        Ghost: 9,
        Demon: 10
    }
    const randType = Object.entries(monsterTypes)
    return randType[Math.floor(Math.random() * randType.length)];
}

let drawPlayers = document.querySelectorAll(".draw-player")
let playerHands = document.querySelectorAll(".player-hand")

drawPlayers.forEach(function (drawPlayer) {
    drawPlayer.addEventListener('click', () => {
        drawPlayer.classList.add('hide')
        let monster = getRandomMonster()
        let type = getRandomMonsterType()
        let player = {
            name: monster[0] + ' the ' + type[0],
            score: monster[1] + type[1]
        }
        players.push(player)
        playerHands.forEach(function (playerHand) {
            playerHand.addEventListener('click', () => {
                // playerHand.classList.add(player.score) //is there a way to do this without adding to both html tags
                playerHand.innerHTML = '<h3>' + player.name + '</h3><h4>' + player.score + '</h4>'
            })
        })
    })
})

let players = []

let submitResults = document.querySelector('button')

submitResults.addEventListener('click', () => {
    let result = ((players[0].score) > (players[1].score)) ? (players[0].name) + ' wins!'
                : ((players[0].score) < (players[1].score)) ? (players[1].name) + ' wins!'
                : 'Its a draw!'
    submitResults.textContent = result
})


// submitResults.addEventListener('click', () => {
//     console.log(players[1].name)
//     let result;
// if ((players[0].score) > (players[1].score)) {
//     result = players[0].name + ' wins!'
// } else if ((players[0].score) < (players[1].score))  {
//     result = players[1].name + ' wins!'
// } else {
//     result = 'Its a draw!'
// }
// return submitResults.textContent = result
// })
