$(document).ready( function(){
  var rps = ["rock", "paper", "scissors"]
  var wins = []
  var loses = []
  var ties = []
  $(".btn").on("click", function(){
    var choice = this.id
    var compChoice = rps[Math.floor(Math.random()*rps.length)]
    var win = $('win')
    var lose = $('lose')
    var tie = $('tie')
    if (choice == "paper" && compChoice == "rock" || choice == "rock" && compChoice == "scissors" || choice == "scissors" && compChoice == "paper") {
      wins.push("1")
      alert('You Win! You picked: ' + choice + ' and the Computer picked: ' + compChoice) 
    } else if (compChoice == "paper" && choice == "rock" || compChoice == "rock" && choice == "scissors" || compChoice == "scissors" && choice == "paper") {
      loses.push("1")
      alert('You lose... You picked: ' + choice + ' and the Computer picked: ' + compChoice)
    } else {
      ties.push("1")
      alert('You Tied. You picked: ' + choice + ' and the Computer picked: ' + compChoice)
    }
    updateWins()
  })

  function updateWins(){
    var totalWins = wins.length
      if (totalWins > 0) {
        $('#win').empty()
        win.append("Wins: " + totalWins)
      } else {
        $('#win').empty()
        win.append("Wins: 0")
      }
    var totalLoses = loses.length
      if (totalLoses > 0 ) {
        $('#lose').empty()
        lose.append("Loses: " + totalLoses)
      } else {
        $('#lose').empty()
        lose.append("Loses: 0")
      }
    var totalTies = ties.length
      if (totalTies > 0) {
        $('#tie').empty()
        tie.append("Ties: " + totalTies)
      } else {
        $('#tie').empty()
        tie.append("Ties: 0")
      }
  }
})