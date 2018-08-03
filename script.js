var makePoliticianObject = function (name,partyColor) {

    var politicianObject = {};
    politicianObject.name = name;
    politicianObject.electionResults = null;
    politicianObject.partyColor = partyColor;
    politicianObject.totalVotes = 0;
    politicianObject.countTotalVotes = function () {
      this.totalVotes = 0;
      for (var i = 0; i < this.electionResults.length; i++) 
      {
        this.totalVotes = this.totalVotes + this.electionResults[i];
      }
    };
    return politicianObject;

};


var candidate1 = makePoliticianObject("Rick",[132, 17, 11]);
var candidate2 = makePoliticianObject("Morty",[245, 141, 136]);

/*State votes data*/
candidate1.electionResults = [5, 1, 7, 2, 33, 6, 4, 2, 1, 14, 8, 3, 1, 11, 11, 0, 5, 3, 3, 3, 7, 4, 8, 9, 3, 7, 2, 2, 4, 2, 8, 3, 15, 15, 2, 12, 0, 4, 13, 1, 3, 2, 8, 21, 3, 2, 11, 1, 3, 7, 2,];

candidate2.electionResults = [4, 2, 4, 4, 22, 3, 3, 1, 2, 15, 8, 1, 3, 9, 0, 6, 1, 5, 5, 1, 3, 7, 8, 1, 3, 3, 1, 3, 2, 2, 6, 2, 14, 0, 1, 6, 7, 3, 7, 3, 6, 1, 3, 17, 3, 1, 2, 11, 2, 3, 1,];

/*Updating number of votes from several states that were entered incorrectly*/
candidate1.electionResults[9] = 1;
candidate1.electionResults[4] = 17;
candidate1.electionResults[43] = 11;

candidate2.electionResults[9] = 28;
candidate2.electionResults[4] = 38;
candidate2.electionResults[43] = 27;


var setStateResults = function (state) {
  theStates[state].winner = null;
  if (candidate1.electionResults[state] > candidate2.electionResults[state])
  {
    theStates[state].winner = candidate1; 
   }
  else if (candidate1.electionResults[state] < candidate2.electionResults[state])
  {
     theStates[state].winner = candidate2;
  }
  var stateWinner = theStates[state].winner;
 
  if (stateWinner !== null) {
    theStates[state].rgbColor = stateWinner.partyColor;
} else {
    theStates[state].rgbColor = [11,32,57];
}
  var stateInfoTable = document.getElementById("stateResults");
  var header = stateInfoTable.children[0].children[0];
  var body = stateInfoTable.children[1];
  var stateName = header.children[0];
  var abbrev = header.children[1];
  var candidateName1 = body.children[0].children[0];
  var candidateVotes1 = body.children[0].children[1];
  var candidateName2 = body.children[1].children[0];
  var candidateVotes2 = body.children[1].children[1];
  var winnerName = body.children[2].children[1];
  
  stateName.innerText = theStates[state].nameFull;
  abbrev.innerText = theStates[state].nameAbbrev;
  candidateName1.innerText = candidate1.name;
  candidateVotes1.innerText = candidate1.electionResults[state];
  candidateName2.innerText = candidate2.name;
  candidateVotes2.innerText = candidate2.electionResults[state];
  if (theStates[state].winner === null) {
    winnerName.innerText = "Draw";
  } else {
    winnerName.innerText = theStates[state].winner.name;
  }
  
}


candidate1.countTotalVotes();
candidate2.countTotalVotes();

var winner ="N/A";

if (candidate1.totalVotes > candidate2.totalVotes)
{
  winner = candidate1.name;
}
else if (candidate1.totalVotes < candidate2.totalVotes)
{
  winner = candidate2.name;
}
else
{
  winner = "It's a tie";
  
}

console.log("The winner is " + winner + " !!!");


var table = document.getElementById("countryResults");

table.children[0].children[0].children[0].innerText = candidate1.name;
table.children[0].children[0].children[1].innerText = candidate1.totalVotes;
table.children[0].children[0].children[2].innerText = candidate2.name;
table.children[0].children[0].children[3].innerText = candidate2.totalVotes;
table.children[0].children[0].children[5].innerText = winner;

