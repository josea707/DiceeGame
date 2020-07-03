randomizeDicees();

function randomizeDicees()
{
  var firstPlayer =randomizeNumber(".img1");
  var secondPlayer = randomizeNumber(".img2");
  var element = document.querySelector("h1");
  if(firstPlayer > secondPlayer)
  {
    element.innerHTML = "🚩Player 1 Wins!";
  }
  else if (secondPlayer > firstPlayer) {
    element.innerHTML = "Player 2 Wins!🚩";
  }
  else
  {
    element.innerHTML = "It's a tie!";
  }

}

function randomizeNumber(elementName)
{
    var numberRandom = getRandomNumber();
    var element = document.querySelector(elementName);
    element.setAttribute("src","images/dice"+numberRandom+".png");
    return numberRandom;
}


function getRandomNumber()
{
  return (Math.floor((Math.random() * 6)) + 1);

}
