module.exports = class Person {
    constructor(name, age, city, items = []) {
      this.name = name;
      this.age = age;
      this.city = city;
      this.items = items;
    }
  
    displayItems() {
      return this.items;
    }  
    addItem(item) {
      this.items.push(item);
    }
    becomeAMember(club) {
      this.club = club.name;
      club.members.push(this);
    }
    makeAnOffer(person, x, y) {
      console.log(
        "Hello " + person.name,
        ", my name is " + this.name,
        ". I like to trade your " + x,
        " with my " + y,
        "."
      );
    }
    takeTheDeal(person, x, y) {
      if (person.items.includes(x) && this.items.includes(y)) {
        let index1 = person.items.indexOf(x);
        person.items.splice(index1, 1);
        this.items.push(x);
  
        let index2 = this.items.indexOf(y);
        this.items.splice(index2, 1);
        person.items.push(y);
      }
    }
    participate(event) {
      if (this.age>event.ageLimit){
      this.event = event.name
      event.participants.push(this);
      } else {
        console.log(`Sorry ${this.name}, you are too young to patricipate this event.`)
      }  
    }
  }
  