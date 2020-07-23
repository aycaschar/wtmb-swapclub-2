module.exports = class Club {
  constructor(name, members = [] ) {
    this.name = name;
    this.members = members;
    this.events = [];          
  }
  printMemberNames() {
    console.log(this.members.forEach(printName));
  }
  chooseAWinner(event){
    let winner = event.participants[Math.floor(Math.random() * event.participants.length)];
    return winner;    
}  
}
const printName = (person) => console.log(person.name);