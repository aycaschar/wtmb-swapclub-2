module.exports = class Event{
    constructor(name, ageLimit ){
      this.name = name;
      this.ageLimit = ageLimit;
      this.participants = [];        
    }
    addEvent(club) {
      this.club = club.name;
      club.events.push(this);
    }    
  }