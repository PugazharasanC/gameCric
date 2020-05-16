var createTeamDiv = function (teamName) {
    var teamDiv = document.createElement("div");
    teamDiv.className = "p-2 bd-highlight";
    var rowDiv = document.createElement("div");
    rowDiv.className = "row";
    var teamScoreP = document.createElement("p");
    teamScoreP.className = "text-center font-weight-bold";
    teamScoreP.innerHTML = teamName + "'s Score";
    rowDiv.appendChild(teamScoreP);
    teamDiv.appendChild(rowDiv);
    rowDiv = document.createElement("div");
    rowDiv.className = "row";
    teamScoreP = document.createElement("p");
    teamScoreP.className = "text-center";
    teamScoreP.id = teamName.split(" ").join('') + "score";
    teamScoreP.innerHTML = "0";
    rowDiv.appendChild(teamScoreP);
    teamDiv.appendChild(rowDiv);
    rowDiv = document.createElement("div");
    rowDiv.className = "row";
    var hitButton = document.createElement("button");
    hitButton.className = "btn btn-primary";
    hitButton.innerHTML = "HIT";
    hitButton.id = teamName.split(' ').join('') + "hit";
    hitButton.setAttribute("onclick", "play(" + parseInt(teamName.split(" ")[1]) + ")");
    rowDiv.appendChild(hitButton);
    teamDiv.appendChild(rowDiv);
    return teamDiv;
};
var createTimerDiv = function () {
    var mainDiv = document.createElement("div");
    mainDiv.className = "p-2 bd-highlight";
    var rowDiv = document.createElement("div");
    rowDiv.className = "row";
    var timerTagP = document.createElement("p");
    timerTagP.className = "text-center font-weight-bold";
    timerTagP.innerHTML = "Timer";
    rowDiv.appendChild(timerTagP);
    mainDiv.appendChild(rowDiv);
    rowDiv = document.createElement("div");
    rowDiv.className = "row";
    timerTagP = document.createElement("p");
    timerTagP.className = "text-center";
    timerTagP.style.fontSize = "40px";
    timerTagP.innerHTML = "0";
    timerTagP.id = "timer";
    rowDiv.appendChild(timerTagP);
    mainDiv.appendChild(rowDiv);
    return mainDiv;
};
var createHitPanel = function () {
    var mainDiv = document.createElement("div");
    mainDiv.className = "d-flex justify-content-around bd-highlight mb-3 border-bottom";
    mainDiv.appendChild(createTeamDiv("TEAM 1"));
    mainDiv.appendChild(createTimerDiv());
    mainDiv.appendChild(createTeamDiv("TEAM 2"));
    return mainDiv;
};
var createGenerateDiv = function () {
    var genResultDiv = document.createElement('div');
    genResultDiv.className = "d-flex justify-content-around bd-highlight mb-3";
    var tempDiv = document.createElement('div');
    tempDiv.className = "p-2 bd-highlight";
    var genResultButton = document.createElement('button');
    genResultButton.className = "btn btn-primary";
    genResultButton.innerHTML = "GENERATE RESULT";
    genResultButton.id = 'genResult';
    genResultButton.onclick = getResult;
    genResultButton.disabled = true;
    tempDiv.appendChild(genResultButton);
    genResultDiv.appendChild(tempDiv);
    return genResultDiv;
};
var getMyResultTable = function (teamName) {
    var table = document.createElement('table');
    table.className = "table table-bordered";
    var headRow = document.createElement('tr');
    for (var colNum = 0; colNum < 8; colNum++) {
        var cell = document.createElement("th");
        if (colNum == 0) {
            cell.innerHTML = teamName;
        }
        else if (colNum == 7) {
            cell.innerHTML = "Result";
        }
        else {
            cell.innerHTML = "B" + colNum;
        }
        headRow.appendChild(cell);
    }
    table.appendChild(headRow);
    teamName = teamName.split(" ").join("");
    for (var playerNum = 1; playerNum <= 10; playerNum++) {
        var playerRow = document.createElement("tr");
        for (var colNum = 0; colNum < 8; colNum++) {
            var cell = document.createElement("td");
            if (colNum == 0) {
                cell.innerHTML = "Player " + playerNum;
            }
            else if (colNum == 7) {
                cell.innerHTML = "0";
                cell.id = teamName + "sum" + playerNum;
            }
            else {
                cell.id = teamName + "cell" + playerNum + colNum;
            }
            playerRow.appendChild(cell);
        }
        table.appendChild(playerRow);
    }
    return table;
};
var getWinnerDiv = function () {
    var mainDiv = document.createElement("div");
    mainDiv.className = "col-sm-2";
    var winnerDiv = document.createElement("div");
    winnerDiv.className = "border-bottom";
    var winnerText = document.createElement("p");
    winnerText.innerHTML = "MATCH WON BY";
    winnerDiv.appendChild(winnerText);
    winnerText = document.createElement("p");
    winnerText.id = "winner";
    winnerDiv.appendChild(winnerText);
    mainDiv.appendChild(winnerDiv);
    winnerDiv = document.createElement("div");
    winnerText = document.createElement("p");
    winnerText.innerHTML = "MAN OF THE MATCH";
    winnerDiv.appendChild(winnerText);
    winnerText = document.createElement("p");
    winnerText.id = "manOfTheMatch";
    winnerDiv.appendChild(winnerText);
    winnerText = document.createElement("p");
    winnerText.id = "manOfTheMatchTeam";
    winnerDiv.appendChild(winnerText);
    winnerText = document.createElement("p");
    winnerText.id = "manOfTheMatchScore";
    winnerDiv.appendChild(winnerText);
    mainDiv.appendChild(winnerDiv);
    return mainDiv;
};
var createScoreTables = function () {
    var mainDiv = document.createElement("div");
    mainDiv.className = "row";
    var colDiv = document.createElement("div");
    colDiv.className = "col-sm-5";
    var titleText = document.createElement("p");
    titleText.className = "text-center";
    titleText.innerHTML = "TEAM 1 SCORE BOARD";
    colDiv.appendChild(titleText);
    colDiv.appendChild(getMyResultTable("TEAM 1"));
    mainDiv.appendChild(colDiv);
    mainDiv.appendChild(getWinnerDiv());
    colDiv = document.createElement("div");
    colDiv.className = "col-sm-5";
    titleText = document.createElement("p");
    titleText.className = "text-center";
    titleText.innerHTML = "TEAM 2 SCORE BOARD";
    colDiv.appendChild(titleText);
    colDiv.appendChild(getMyResultTable("TEAM 2"));
    mainDiv.appendChild(colDiv);
    return mainDiv;
};
window.onload = function () {
    var containerDiv = document.createElement("div");
    containerDiv.className = "container";
    var nav = document.createElement("nav");
    nav.className = "navbar navbar-expand-lg navbar-light bg-light";
    var headElem = document.createElement("h1");
    headElem.className = "navbar-brand mx-auto";
    headElem.innerHTML = "Cricket Game";
    nav.appendChild(headElem);
    containerDiv.appendChild(nav);
    containerDiv.appendChild(createHitPanel());
    containerDiv.appendChild(createGenerateDiv());
    containerDiv.appendChild(createScoreTables());
    var body = document.getElementsByTagName("body")[0];
    body.appendChild(containerDiv);
    var hitButton = document.getElementById("TEAM2hit");
    hitButton.disabled = true;
    ///alert("Hello");
    startTimer(60, document.getElementById("timer"));
};
var Player = /** @class */ (function () {
    function Player() {
        this.scoreArr = new Array(6);
        this._totalScore = 0;
        this._currBall = 0;
    }
    Player.prototype.add = function (score) {
        this._totalScore += score;
        this.scoreArr[this._currBall] = score;
        this._currBall++;
    };
    Player.prototype.currBall = function () {
        return this._currBall;
    };
    Player.prototype.totalScore = function () {
        return this._totalScore;
    };
    return Player;
}());
var cricketTeam = /** @class */ (function () {
    function cricketTeam() {
        this.players = new Player()[10];
        this.players = new Array(10);
        console.log(this.players);
        for (var ind = 0; ind < this.players.length; ind++) {
            this.players[ind] = new Player();
        }
        this._currPlayer = 0;
        this.flag = false;
        this._totalScore = 0;
    }
    cricketTeam.prototype.add = function (score) {
        this._totalScore += score;
        if (this.flag == true) {
            this.flag = false;
            this._currPlayer++;
        }
        this.players[this._currPlayer].add(score);
        if (score == 0 || this.players[this._currPlayer].currBall() == 6) {
            this.flag = true;
        }
    };
    cricketTeam.prototype.totalScore = function () {
        return this._totalScore;
    };
    cricketTeam.prototype.currPlayer = function () {
        return this._currPlayer;
    };
    cricketTeam.prototype.getCurrBall = function () {
        return this.players[this._currPlayer].currBall();
    };
    cricketTeam.prototype.currPlayerTotalScore = function () {
        return this.players[this._currPlayer].totalScore();
    };
    cricketTeam.prototype.getNextPlayer = function () {
        return this.flag;
    };
    cricketTeam.prototype.getManOfTheMatch = function () {
        var score = 0;
        var playerNum = -1;
        for (var ind = 0; ind < this.players.length; ind++) {
            if (this.players[ind].totalScore() > score) {
                score = this.players[ind].totalScore();
                playerNum = ind;
            }
        }
        return { score: score, playerNum: playerNum };
    };
    return cricketTeam;
}());
var team = new Array(2);
for (var ind = 0; ind < team.length; ind++) {
    team[ind] = new cricketTeam();
}
var play = function (teamNum) {
    var score = Math.floor(Math.random() * 7);
    console.log(score);
    team[teamNum - 1].add(score);
    var addScore = document.getElementById("TEAM" + teamNum + "sum" + (team[teamNum - 1].currPlayer() + 1));
    addScore.innerHTML = "" + team[teamNum - 1].currPlayerTotalScore();
    addScore = document.getElementById("TEAM" + teamNum + "cell" + (team[teamNum - 1].currPlayer() + 1) + team[teamNum - 1].getCurrBall());
    addScore.innerHTML = "" + score;
    var teamScore = document.getElementById("TEAM" + teamNum + "score");
    teamScore.innerHTML = "" + team[teamNum - 1].totalScore();
    if (teamNum == 1 && ((team[teamNum - 1].currPlayer() == 9 && true == team[teamNum - 1].getNextPlayer()))) {
        changeTeam();
    }
    if (teamNum == 2 && ((team[teamNum - 1].currPlayer() == 9 && true == team[teamNum - 1].getNextPlayer()))) {
        announceWinner();
    }
};
var flag;
var changeTeam = function () {
    var hitButton = document.getElementById("TEAM2hit");
    hitButton.disabled = false;
    hitButton = document.getElementById("TEAM1hit");
    hitButton.disabled = true;
    resetTimer(60);
    flag++;
};
var announceWinner = function () {
    console.log('announceWinner');
    var hitButton = document.getElementById("TEAM2hit");
    hitButton.disabled = true;
    var genResultButton = document.getElementById("genResult");
    genResultButton.disabled = false;
    stopTimer();
    flag++;
};
var timer;
var time;
var startTimer = function (duration, display) {
    timer = duration;
    time = setInterval(function () {
        display.innerHTML = timer;
        if (--timer < 0) {
            if (flag == 0) {
                changeTeam();
                flag++;
            }
            else if (flag == 1) {
                announceWinner();
                flag++;
            }
            else {
                clearInterval(time);
            }
            timer = duration;
        }
    }, 1000);
};
var stopTimer = function () {
    clearInterval(time);
};
var resetTimer = function (seconds) {
    timer = seconds;
};
var getResult = function () {
    var winner = document.getElementById("winner");
    var temp = 0;
    if (team[0].totalScore() < team[1].totalScore()) {
        winner.innerHTML = "TEAM 2";
        temp = 2;
    }
    else if (team[0].totalScore() > team[1].totalScore()) {
        winner.innerHTML = "TEAM 1";
        temp = 1;
    }
    else {
        winner.innerHTML = "Match Draw";
    }
    var manOfTheMatch1 = team[0].getManOfTheMatch();
    var manOfTheMatch2 = team[1].getManOfTheMatch();
    var manOfTheMatch = document.getElementById('manOfTheMatch');
    var manOfTheMatchScore = document.getElementById('manOfTheMatchScore');
    var manOfTheMatchTeam = document.getElementById('manOfTheMatchTeam');
    if (manOfTheMatch2.score < manOfTheMatch1.score || (manOfTheMatch2.score == manOfTheMatch1.score && temp == 1)) {
        manOfTheMatch.innerHTML = "PLAYER " + (manOfTheMatch1.playerNum + 1);
        manOfTheMatchScore.innerHTML = "Score : " + manOfTheMatch1.score;
        manOfTheMatchTeam.innerHTML = "TEAM 1";
    }
    else if (manOfTheMatch2.score > manOfTheMatch1.score || (manOfTheMatch2.score == manOfTheMatch1.score && temp == 2)) {
        manOfTheMatch.innerHTML = "PLAYER " + (manOfTheMatch2.playerNum + 1);
        manOfTheMatchScore.innerHTML = "Score : " + manOfTheMatch2.score;
        manOfTheMatchTeam.innerHTML = "TEAM 2";
    }
};
