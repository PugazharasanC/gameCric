let createTeamDiv = (teamName: string): HTMLDivElement => {
    let teamDiv: HTMLDivElement = document.createElement("div");
    teamDiv.className = "p-2 bd-highlight";
    let rowDiv: HTMLDivElement = document.createElement("div");
    rowDiv.className = "row";
    let teamScoreP: HTMLParagraphElement = document.createElement("p");
    teamScoreP.className = "text-center font-weight-bold";
    teamScoreP.innerHTML = teamName + "'s Score";
    rowDiv.appendChild(teamScoreP);
    teamDiv.appendChild(rowDiv);
    rowDiv = document.createElement("div");
    rowDiv.className = "row";
    teamScoreP = document.createElement("p");
    teamScoreP.className = "text-center";
    teamScoreP.id = teamName.split(" ").join('')+"score";
    teamScoreP.innerHTML = "0";
    rowDiv.appendChild(teamScoreP);
    teamDiv.appendChild(rowDiv);
    rowDiv = document.createElement("div");
    rowDiv.className = "row";
    let hitButton: HTMLButtonElement = document.createElement("button");
    hitButton.className = "btn btn-primary";
    hitButton.innerHTML = "HIT";
    hitButton.id = teamName.split(' ').join('') + "hit";
    hitButton.setAttribute("onclick",`play(${parseInt(teamName.split(" ")[1])})`);
    rowDiv.appendChild(hitButton);
    teamDiv.appendChild(rowDiv);
    return teamDiv;
}

let createTimerDiv = (): HTMLDivElement => {
    let mainDiv: HTMLDivElement = document.createElement("div");
    mainDiv.className = "p-2 bd-highlight";
    let rowDiv: HTMLDivElement = document.createElement("div");
    rowDiv.className = "row";
    let timerTagP: HTMLParagraphElement = document.createElement("p");
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
}

let createHitPanel = (): HTMLDivElement => {
    let mainDiv: HTMLDivElement = document.createElement("div");
    mainDiv.className = "d-flex justify-content-around bd-highlight mb-3 border-bottom";
    mainDiv.appendChild(createTeamDiv("TEAM 1"));
    mainDiv.appendChild(createTimerDiv());
    mainDiv.appendChild(createTeamDiv("TEAM 2"));
    return mainDiv;
}

let createGenerateDiv = (): HTMLDivElement => {
    let genResultDiv: HTMLDivElement = document.createElement('div');
    genResultDiv.className = "d-flex justify-content-around bd-highlight mb-3";
    let tempDiv: HTMLDivElement = document.createElement('div');
    tempDiv.className = "p-2 bd-highlight";
    let genResultButton: HTMLButtonElement = document.createElement('button');
    genResultButton.className = "btn btn-primary";
    genResultButton.innerHTML = "GENERATE RESULT";
    genResultButton.id = 'genResult';
    genResultButton.onclick = getResult;
    genResultButton.disabled = true;
    tempDiv.appendChild(genResultButton);
    genResultDiv.appendChild(tempDiv);
    return genResultDiv;
}

let getMyResultTable = (teamName: string): HTMLTableElement => {
    let table: HTMLTableElement = document.createElement('table');
    table.className = "table table-bordered";
    let headRow: HTMLTableRowElement = document.createElement('tr');
    for (let colNum = 0; colNum < 8; colNum++) {
        let cell: HTMLTableHeaderCellElement = document.createElement("th");
        if (colNum == 0) {
            cell.innerHTML = teamName;
        } else if (colNum == 7) {
            cell.innerHTML = "Result";
        } else {
            cell.innerHTML = "B" + colNum;
        }
        headRow.appendChild(cell);
    }
    table.appendChild(headRow);
    teamName = teamName.split(" ").join("");
    for (let playerNum = 1; playerNum <= 10; playerNum++) {
        let playerRow: HTMLTableRowElement = document.createElement("tr");
        for (let colNum = 0; colNum < 8; colNum++) {
            let cell: HTMLTableHeaderCellElement = document.createElement("td");
            if (colNum == 0) {
                cell.innerHTML = "Player " + playerNum;
            } else if (colNum == 7) {
                cell.innerHTML = "0";
                cell.id = teamName + "sum" + playerNum;
            } else {
                cell.id = teamName + "cell" + playerNum + colNum;
            }
            playerRow.appendChild(cell);
        }
        table.appendChild(playerRow);
    }
    return table;
}
let getWinnerDiv = ():HTMLDivElement => {
    let mainDiv:HTMLDivElement = document.createElement("div");
    mainDiv.className = "col-sm-2";
    let winnerDiv = document.createElement("div");
    winnerDiv.className = "border-bottom";
    let winnerText:HTMLParagraphElement = document.createElement("p");
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
}
let createScoreTables = (): HTMLDivElement => {
    let mainDiv: HTMLDivElement = document.createElement("div");
    mainDiv.className = "row";
    let colDiv: HTMLDivElement = document.createElement("div");
    colDiv.className = "col-sm-5";
    let titleText: HTMLParagraphElement = document.createElement("p");
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
}

window.onload = (): void => {
    let containerDiv: HTMLDivElement = document.createElement("div");
    containerDiv.className = "container";
    let nav = document.createElement("nav");
    nav.className = "navbar navbar-expand-lg navbar-light bg-light";
    let headElem: HTMLHeadElement = document.createElement("h1");
    headElem.className = "navbar-brand mx-auto";
    headElem.innerHTML = "Cricket Game";
    nav.appendChild(headElem);
    containerDiv.appendChild(nav);
    containerDiv.appendChild(createHitPanel());
    containerDiv.appendChild(createGenerateDiv());
    containerDiv.appendChild(createScoreTables());
    let body: HTMLBodyElement = < HTMLBodyElement > document.getElementsByTagName("body")[0];
    body.appendChild(containerDiv);
    let hitButton:HTMLButtonElement = <HTMLButtonElement>document.getElementById("TEAM2hit");
    hitButton.disabled = true;
    ///alert("Hello");
    startTimer(60,<HTMLParagraphElement>document.getElementById("timer"));
}

class Player
{
    protected _totalScore:number;
    protected scoreArr:Array<number>
    protected _currBall:number;
    constructor(){
        this.scoreArr = new Array(6);
        this._totalScore = 0;
        this._currBall = 0;
    }
    add(score:number):void{
        this._totalScore += score;
        this.scoreArr[this._currBall] = score;
        this._currBall++;
    }
    currBall():number{
        return this._currBall;
    }
    totalScore():number{
        return this._totalScore;
    }
}
class cricketTeam{
    protected players:Array<Player> = new Player()[10];
    protected _currPlayer:number;
    protected _totalScore:number;
    flag:boolean;
    constructor(){
        this.players = new Array(10);
        console.log(this.players);
        for(let ind = 0;ind < this.players.length; ind++){
            this.players[ind] = new Player();
        }
        this._currPlayer = 0;
        this.flag = false;
        this._totalScore = 0;
    }
    add(score:number):void{
        this._totalScore += score;
        if(this.flag == true){
            this.flag = false;
            this._currPlayer++;
        }
        this.players[this._currPlayer].add(score);
        if(score == 0 || this.players[this._currPlayer].currBall() == 6){
            this.flag = true;
        }
    }
    totalScore():number{
        return this._totalScore;
    }
    currPlayer():number{
        return this._currPlayer;
    }
    getCurrBall():number{
        return this.players[this._currPlayer].currBall();
    }
    currPlayerTotalScore():number{
        return this.players[this._currPlayer].totalScore();
    }
    getNextPlayer():boolean{
        return this.flag;
    }
    getManOfTheMatch(){
        let score = 0;
        let playerNum = -1;
        for(let ind = 0 ; ind < this.players.length ; ind++){
            if(this.players[ind].totalScore() > score){
                score = this.players[ind].totalScore();
                playerNum = ind;
            }
        }
        return {score,playerNum};
    }
}
let team:Array<cricketTeam> = new Array(2);
for(let ind = 0; ind < team.length;ind++)
{
    team[ind] = new cricketTeam();
}
let play = (teamNum:number):void =>{
    let score = Math.floor(Math.random()*7);
    console.log(score);
    team[teamNum-1].add(score);
    let addScore:HTMLTableDataCellElement = <HTMLTableDataCellElement> document.getElementById(`TEAM${teamNum}sum${team[teamNum-1].currPlayer()+1}`);
    addScore.innerHTML = `${team[teamNum-1].currPlayerTotalScore()}`;
    addScore = <HTMLTableDataCellElement>document.getElementById(`TEAM${teamNum}cell${team[teamNum-1].currPlayer()+1}${team[teamNum-1].getCurrBall()}`);
    addScore.innerHTML = `${score}`;
    let teamScore:HTMLParagraphElement = <HTMLParagraphElement>document.getElementById(`TEAM${teamNum}score`);
    teamScore.innerHTML = `${team[teamNum-1].totalScore()}`;
    if(teamNum ==1 && ((team[teamNum-1].currPlayer() == 9 && true == team[teamNum-1].getNextPlayer()))){
        changeTeam();
    }
    if(teamNum == 2 && ((team[teamNum-1].currPlayer() == 9 && true == team[teamNum-1].getNextPlayer()))){
        announceWinner();
    }
}

let flag;
let changeTeam = () => {
    let hitButton:HTMLButtonElement = <HTMLButtonElement>document.getElementById("TEAM2hit");
    hitButton.disabled = false;
    hitButton = <HTMLButtonElement>document.getElementById("TEAM1hit");
    hitButton.disabled = true;
    resetTimer(60);
    flag++;
}
let announceWinner = () => {
    console.log('announceWinner');
    let hitButton:HTMLButtonElement = <HTMLButtonElement>document.getElementById("TEAM2hit");
    hitButton.disabled = true;
    let genResultButton:HTMLButtonElement = <HTMLButtonElement>document.getElementById("genResult");
    genResultButton.disabled = false;
    stopTimer();
    flag++;
}
let timer;
let time;
let startTimer = (duration:number, display:HTMLParagraphElement) => {
    timer = duration;
    time = setInterval(function () {
        display.innerHTML = timer;
        if (--timer < 0) {
            if(flag==0){
                changeTeam();
                flag++;
            }else if(flag == 1){
                announceWinner();
                flag++;
            }
            else{
                clearInterval(time);
            }
            timer = duration;
        }
    }, 1000);
}
let stopTimer = () =>{
    clearInterval(time);
}
let resetTimer = (seconds:number) => {
  timer = seconds;
}
let getResult = () =>{
    let winner:HTMLParagraphElement = <HTMLParagraphElement> document.getElementById("winner");
    let temp = 0;
    if(team[0].totalScore() < team[1].totalScore()){
        winner.innerHTML = "TEAM 2";
        temp = 2;
    }
    else if(team[0].totalScore() > team[1].totalScore()){
        winner.innerHTML = "TEAM 1";
        temp = 1;
    }
    else{
        winner.innerHTML = "Match Draw";
    }
    let manOfTheMatch1 = team[0].getManOfTheMatch();
    let manOfTheMatch2 = team[1].getManOfTheMatch();
    let manOfTheMatch:HTMLParagraphElement = <HTMLParagraphElement>document.getElementById('manOfTheMatch');
    let manOfTheMatchScore:HTMLParagraphElement = <HTMLParagraphElement>document.getElementById('manOfTheMatchScore');
    let manOfTheMatchTeam:HTMLParagraphElement = <HTMLParagraphElement>document.getElementById('manOfTheMatchTeam');
    if(manOfTheMatch2.score < manOfTheMatch1.score || (manOfTheMatch2.score == manOfTheMatch1.score && temp == 1)){
        manOfTheMatch.innerHTML = `PLAYER ${manOfTheMatch1.playerNum+1}`;
        manOfTheMatchScore.innerHTML = `Score : ${manOfTheMatch1.score}`;
        manOfTheMatchTeam.innerHTML = `TEAM 1`;
    }
    else if(manOfTheMatch2.score > manOfTheMatch1.score || (manOfTheMatch2.score == manOfTheMatch1.score && temp == 2)){
        manOfTheMatch.innerHTML = `PLAYER ${manOfTheMatch2.playerNum+1}`;
        manOfTheMatchScore.innerHTML = `Score : ${manOfTheMatch2.score}`;
        manOfTheMatchTeam.innerHTML = `TEAM 2`;
    }
}