var readlineSync = require('readline-sync');
const chalk = require('chalk');

var questionList = [
	{
		question:
			'1.Which season(s) had the most number of hat-tricks?. \n a. 2008 &2017 \n b. 2011 \n c. 2009  \n d.2013  ',
		answer: 'a'
	},
	{
		question:
			'2.Which Australian has the best bowling figures in the IPL? \n a. Andrew Tye \n b. Adam Zampa \n c. James Faulkner \n d. Michele johnson \n ',
		answer: 'b'
	},
	{
		question:
			'3.Which player holds the record for the fastest fifty in IPL? \n a. Rohit Sharma \n b. virat kohli \n c. K L Rahul \n d. Tangent ',
		answer: 'c'
	},
	{
		question:
			'4.Who is the captain of the Mumbai Indians in IPL 2012? \n Hardik pandya \n b.Bumrah \n c. Rohit Sharma\n d. Pollard',
		answer: 'c'
	},
	{
		question:
			'5.Which among these players has the joint-most ducks in IPL history alongside Harbhajan Singh? \n a. Parthiv Patel\n b. Rohit Sharma\n c. Ravindra Jadeja \n d. Suresh Raina ',
		answer: 'a'
	}
];

//score of user
let userScore = 0;

function check(question, answer){
  var userAns = readlineSync.question(question+'\n Enter your answer: ');
  if(userAns === answer.toLowerCase()){
    console.log(chalk.red.bgGreen("Right Answer"));
    userScore += 4;
  }
  else{
    console.log(chalk.black.bgYellow("Wrong Answer"));
    userScore -= 1;
  }
}
var userName = readlineSync.question("Enter your name : ");
console.log(chalk.black.bgWhite("Welcome! "+userName+"."));
console.log("Lets see how much do you know about IPL ?");
console.log("Lets start the game...");
for(var i = 0; i < questionList.length; i++) {
	check(questionList[i].question, questionList[i].answer);


console.log("-------------------------------------");
console.log("Your total score is : "+userScore);
console.log("-------------------------------------");
}

if (userScore >= 10) {
	console.log(chalk.bgMagenta('You know well about IPL!'));
}