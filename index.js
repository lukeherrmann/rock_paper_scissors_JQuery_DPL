$(document).ready( function(){
  var rps = ["rock", "paper", "scissors"]
  $(".btn").on("click", function(){
    var choice = this.id
    var compChoice = rps[Math.floor(Math.random()*rps.length)]
    
    if (choice == compChoice)
      alert('You Tied. You picked: ' + choice + ' and the Computer picked: ' + compChoice)
    if (choice == "paper" && compChoice == "rock" || choice == "rock" && compChoice == "scissors" || choice == "scissors" && compChoice == "paper")
      alert('You Win! You picked: ' + choice + ' and the Computer picked: ' + compChoice)
    if (compChoice == "paper" && choice == "rock" || compChoice == "rock" && choice == "scissors" || compChoice == "scissors" && choice == "paper")
      alert('You lose... You picked: ' + choice + ' and the Computer picked: ' + compChoice)

  })
})