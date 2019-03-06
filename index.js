$(document).ready( function(){
  var rps = ["rock", "paper", "scissors"]
  $(".btn").on("click", function(){
    var choice = this.id
    var compChoice = rps[Math.floor(Math.random()*rps.length)]
    if (choice == compChoice)
      alert('You Win! You picked: ' + choice + ' and the Computer picked: ' + compChoice)
    else (choice != compChoice)
      alert('You loose... You picked: ' + choice + ' and the Computer picked: ' + compChoice)

  })
})