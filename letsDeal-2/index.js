//Classes = Person, Club and Event
//Club has members who can swap their goods
//Club can choose a random participant to give a prize.
//Person can add items to trade
//Person can participate events 
//Person can make an offer and take the deal to swap items
const Club = require("./club");
const Person = require("./person");
const Event = require("./event.js");
const Database = require("./database");


letsDeal = new Club("Let's Deal");
ayca = new Person("Ayca", 44, "Kusadasi", ["Book", "Dress", "Pen"]);
deniz = new Person("Deniz", 15, "Kusadasi", ["Ball", "Sun Glasses"]);
kaya = new Person ("Kaya", 10, "Kusadasi",["Guitar","Short","Mario Card Wii Game"]);
sweapStake = new Event ("Win A Suprize Prize",12);

ayca.becomeAMember(letsDeal);
deniz.becomeAMember(letsDeal);
kaya.becomeAMember(letsDeal);

sweapStake.addEvent(letsDeal);
ayca.participate(sweapStake);
deniz.participate(sweapStake);
kaya.participate(sweapStake);

ayca.addItem("Mario Wii Game");
deniz.addItem("NBA20K");
ayca.makeAnOffer(deniz, "Ball", "Book");
deniz.takeTheDeal(ayca, "Book", "Ball");
letsDeal.printMemberNames();
console.log(letsDeal.chooseAWinner(sweapStake));


Database.save("club.json", letsDeal);
Database.save("event.json",sweapStake);
Database.save("person.json", ayca);

const loadedFile = Database.load("club.json");
