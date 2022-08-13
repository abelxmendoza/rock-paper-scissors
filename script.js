/*
  Rock Paper Scissors 🚀🔥
  Concepts covered in this project
    👉 For loops
    👉 Dom Manipulation
    👉 Variables
    👉 Conditionals (if else if)
    👉 Template Literals
    👉 Event Listeners
    👉 Higher order Function (Math.random())
*/

// ** getComputerChoice randomly selects between `rock` `paper` `scissors` and returns that string **
// getComputerChoice() 👉 'Rock'
// getComputerChoice() 👉 'Scissors'

/*

fetch('https://robohash.org/5.255.253.156.png')
  .then(response => response.json())
  .then(json => { console.log(json.message) 
  })

*/



const totalScore = { computerScore: 0, playerScore: 0 }






function getComputerChoice() {

  let ComputerChoice = Math.floor(Math.random() * 3)
  let weapon = ""

  //console.log(ComputerChoice)

  if (ComputerChoice == 0)
  {
    weapon = "Rock"
  }
  else if (ComputerChoice == 1)
  {
    weapon = "Paper"
  }
  else
  {
    weapon = "Scissors"
  }

  console.log("Computer Choice: " + weapon)
  return weapon 
  
}

//getComputerChoice()


// ** getResult compares playerChoice & computerChoice and returns the score accordingly **
// human wins - getResult('Rock', 'Scissors') 👉 1
// human loses - getResult('Scissors', 'Rock') 👉 -1
// human draws - getResult('Rock', 'Rock') 👉 0
function getResult(playerChoice, computerChoice) {
  // return the result of score based on if you won, drew, or lost

  let score;
  let compScore;

  let totalPlayerScore = totalScore.playerScore

  let totalComputerScore = totalScore.computerScore

  let playerScore = document.getElementById('yourScore')
  let computerScore = document.getElementById('computerScore')


  //Human Wins
  if (playerChoice == 'Rock' && computerChoice == "Scissors" ||         playerChoice == "Scissors" && computerChoice == "Paper" || 
      playerChoice == "Paper" && computerChoice == "Rock")
  {
    score = 1

    compScore = -1

    console.log("Human Choice: " + playerChoice)
    console.log("Computer Choice: " + computerChoice)
    console.log("Human Wins")
    totalPlayerScore++
    totalComputerScore--
    
  }  

  //Human Losses
  else if (playerChoice == "Scissors" && computerChoice == "Rock"           || playerChoice == "Rock" && computerChoice == "Paper"             || playerChoice == "Paper" && computerChoice ==                    "Scissors")
  {
    score = -1
    compScore = 1

        console.log("Human Choice: " + playerChoice)
        console.log("Computer Choice: " + computerChoice)
        console.log("ROBOTS FOR THE WIN")
        totalPlayerScore--
        totalComputerScore++
  }

  //Human Draws
  else if (playerChoice == "Rock" && computerChoice == "Rock" || playerChoice == "Scissors" && computerChoice == "Scissors" || playerChoice == "Paper" && computerChoice == "Paper")
  {
    score = 0
    compScore = 0
      console.log("Human Choice: " + playerChoice)
        console.log("Computer Choice: " + computerChoice)
        console.log("Its a Draw Boys")
  }

  else {
    score = 0
    compScore = 0
    console.log("DRAW!")
  }
  // All situations where human draws, set `score` to 0
  


  // All situations where human wins, set `score` to 1
  // make sure to use else ifs here
  


  //playerScore.innerText =`Your Score: ${totalScore['playerScore']}`

//playerScore.innerText =`Your Score: ${Number(playerScore.innerText) + score}`

//computerScore.innerText =`Robot Score: ${totalScore['computerScore']}`


  // Otherwise human loses (aka set score to -1)
 

  // return score

  return score
}

//console.log(getResult("Rock" , getComputerChoice()))







// ** showResult updates the DOM to `You Win!` or `You Lose!` or `It's a Draw!` based on the score. Also shows Player Choice vs. Computer Choice**
function showResult(score, playerChoice, computerChoice) {
  // Hint: on a score of -1
  // You should do result.innerText = 'You Lose!'
  // Don't forget to grab the div with the 'result' id!

  let result = document.getElementById("result")
  let handsDiv = document.getElementById("hands")
  //const playerScoreDiv = document.getElementById("player-score")

  let playerScore = document.getElementById('yourScore')
  let computerScore = document.getElementById('computerScore')

  let randomMessage =  Math.floor(Math.random() * 3)




  

  hands.innerText = `👨🏾‍🎤 ${playerChoice} vs. 🤖 ${computerChoice}`

  if (score == 1)
  {
    if(randomMessage == 1)
    {
      result.innerText = "You Win Champ! " + " " + playerChoice + " " + "Beats " + " " + computerChoice 
    }
    else if (randomMessage == 2)
    {
      result.innerText = "Victory! Robots Defeated 💪"

    }
    else 
    {
      result.innerText = "Humans win this battle 💪"
    }

    document.getElementById("cheering").play()
   
  }
 
  else if (score == -1)
  {
   
      

        if(randomMessage == 1)
        {
          result.innerText = "You Lose :( " + " " + computerChoice + " " + "Beats " + " " + playerChoice 
        }
        else if (randomMessage == 2)
        {
          result.innerText = "ROBOTS FOR THE WIN 🦾"


        }
        else 
        {
          result.innerText = "Destroy all Humans 🦾"
        }

        document.getElementById("robotCheer").play()

  }
  else if (score == 0)
  {
    if(randomMessage == 1)
    {
      result.innerText = "It's a Draw Boys"
    }
    else if (randomMessage == 2)
    {
      result.innerText = "TIE GAME"

    }
    else 
    {
      result.innerText = "You're both winners!"
    }
   
   
  }
  else {
    if(randomMessage == 1)
    {
      result.innerText = "It's a Draw Boys"
    }
    else if (randomMessage == 2)
    {
      result.innerText = "TIE GAME"

    }
    else 
    {
      result.innerText = "You're both winners!"
    }
  
  }

  playerScore.innerText =`👨🏾‍🎤 Your Score: ${totalScore['playerScore']}`

  
  computerScore.innerText =`🤖 Robot Score: ${totalScore['computerScore']}`
  

}

// ** Calculate who won and show it on the screen **
function onClickRPS(playerChoice) {

  let weapon = playerChoice
  let enemyWeapon = getComputerChoice()
  let compResult;
  
  console.log("YourChoice: " + weapon)
  console.log("ComputerChoice: " + enemyWeapon)
  
   let gameResult = getResult(weapon, enemyWeapon)
   totalScore['playerScore'] += gameResult

   
   if( gameResult == 1)
    {
      compResult = -1
      totalScore['computerScore'] += compResult
    }
    else if (gameResult == -1)
    {
      compResult = 1
      totalScore['computerScore'] += compResult
    }
    else {

      compResult = 0
      totalScore['computerScore'] += compResult
    }

    
    //console.log(getResult(weapon, getComputerChoice()))

  showResult(gameResult, weapon, enemyWeapon )

  
  
}



// ** Make the RPS buttons actively listen for a click and do something once a click is detected **
function playGame() {
  // use querySelector to select all RPS Buttons

  // * Adds an on click event listener to each RPS button and every time you click it, it calls the onClickRPS function with the RPS button that was last clicked *
  
  // 1. loop through the buttons using a forEach loop
  // 2. Add a 'click' event listener to each button
  // 3. Call the onClickRPS function every time someone clicks
  // 4. Make sure to pass the currently selected rps button as an argument

  /*

const rpsButton = document.querySelectorAll('.rpsButton')
rpsButtons[0].onclick = () => console.log(rpsButtons[0].value)

  rpsButtons.forEach(rpsButton => {
  
      rpsButton.onclick = () => onClickRPS(rpsButton.value)  
  })

  const endGameButton = document.getElementById('endGameButton')


  
 */

  // Add a click listener to the end game button that runs the endGame() function on click
  
}

// ** endGame function clears all the text on the DOM **
function endGame() {


   let result = document.getElementById("result")
  let handsDiv = document.getElementById("hands")
  const playerScoreDiv = document.getElementById("player-score")

  let yourScore = document.getElementById("yourScore")

  let compScore = document.getElementById("computerScore")

  yourScore.innerText = " "
  compScore.innerText = " "
  result.innerText =  " "
  handsDiv.innerText = " "
  playerScoreDiv.innerText = " "
 
  totalScore.playerScore = 0
  totalScore.computerScore = 0
  document.getElementById("endGameImage").setAttribute("class" , "endGame")


  
}

playGame()