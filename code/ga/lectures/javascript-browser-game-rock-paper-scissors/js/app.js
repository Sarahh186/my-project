
const choices = ['rock', 'paper', 'scissors']

/*----------- Variables --------------------*/
// Need a "container" (variable) for the computer's choice; streak; timer; match result; player's choice
let computerChoice
let playerChoice
let msg


/*---- Cached Element References -----------*/

const resultDisplayEl = document.querySelector('#result-display')
const rockBtn = document.querySelector('#rock')
const paperBtn = document.querySelector('#paper')
const scissorsBtn = document.querySelector('#scissors')

const buttons = document.querySelectorAll('button')

/*------------ Functions -------------------*/
// Functions we might need:  comparing player's choice and computer's choice; randomizing the computer's choice; reset the timer/game; display the message with the results (it will use string interpolation)
const handlePlayerChoice = (event) => {
    playerChoice = event.target.id
    console.log('playerChoice: ', playerChoice)
}

const getComputerChoice = () => {
    const indexNumber = Math.floor(Math.random() * 3)
    computerChoice = choices[indexNumber]
    console.log('computerChoice: ', computerChoice)
}

/*--------------------------------variables---------------------------------*/

const getComputerChoice = () => {
const indexnumber = Math.floor(Math.random() * 3)
 computerchoice = choices[indexnumber]
console.log('computer choice:', computerchoice)
  };
  
  const compareChoices = () => {
    if (playerChoice === computerChoice) {
        msg = 'Tie'
    } else if (playerChoice === 'rock' && computerChoice === 'scissors') {
        // msg = `Player chose ${playerChoice} and Computer chose ${computerChoice}. Player wins!`
        msg = 'Player wins!'
    } else if (playerChoice === 'paper' && computerChoice === 'rock') {
        msg = 'Player wins!'
    } else if (playerChoice === 'scissors' && computerChoice === 'paper') {
        msg = 'Player wins!'
    } else {
        msg = 'Computer wins!'
    }
    console.log(msg)
}

const render = () => {
    resultDisplayEl.textContent = `Player chose ${playerChoice} and Computer chose ${computerChoice}. ` + msg
}

const play = (event) => {
    handlePlayerChoice(event)
    getComputerChoice()
    compareChoices()
    render()
}

/*-------- Event Listeners -----------------*/

rockBtn.addEventListener('click', play)
paperBtn.addEventListener('click', play)
scissorsBtn.addEventListener('click', play)

// buttons.forEach(button => {
//     button.addEventListener('click', handlePlayerChoice)
// })

