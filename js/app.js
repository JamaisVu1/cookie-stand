"use strict";

function Store(name, minCust, maxCust, avgSale) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgSale = avgSale;
  this.randomCust = [];
  this.cookieSim = [];
  this.totalSold = 0;
}

Store.prototype.getRandomCust = function () {
  return (
    Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust
  );
};

Store.prototype.hourData = function () {
  this.totalSold = 0;
  for (let hour = 6; hour <= 18; hour++) {
    this.randomCust.push(this.getRandomCust());
    this.cookieSim.push(Math.round(this.randomCust[hour - 6] * this.avgSale));
    this.totalSold += this.cookieSim[hour - 6];
  }
};

const seattle = new Store ('Seattle',23,65,6.3);
const tokyo = new Store ('Tokyo',3,24,1.2);
const dubai = new Store ('Dubai',11,38,3.7);
const paris = new Store ('Paris',20,38,2.3);
const lima = new Store ('Lima',2,16,4.6);




// GPT was used to figure out how to populate an array
// const seattle = {
//   name: 'Seattle',
//   minCust: 23,
//   maxCust: 65,
//   avgSale: 6.3,
//   randomCust: [],
//   cookieSim: [],
//   getRandomCust: function() {
//     return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
//   },
//   hourData: function(){
//     for (let hour = 0; hour < 14; hour++) {
//       this.randomCust.push(this.getRandomCust());
//       this.cookieSim.push(Math.round(this.randomCust[hour] * this.avgSale));
//     }
//   },
// };
// seattle.hourData();

// // brendan huddleston and gpt helped me with this

// let seattleSpot = document.getElementsByClassName('seattle')[0];
// let cookieTotal = 0;
// for (let i = 0; i < seattle.cookieSim.length; i++)
// {
//   let listItem = document.createElement('li');
//   let hour = i + 6;
//   let meridiem = 'am';

//   if (hour>=12){
//     if (hour > 12) {
//       hour -= 12;
//     }
//     meridiem = 'pm';
//   }
//   cookieTotal += seattle.cookieSim[i];
//   listItem.textContent = `${hour} ${meridiem}: ${seattle.cookieSim[i]} cookies`;
//   seattleSpot.appendChild(listItem);
// }
// let totalCookie = document.createElement('li');
// totalCookie.textContent = `Total: ${cookieTotal} cookies`;
// seattleSpot.appendChild(totalCookie);
// // console.log(seattleSpot);

// //
// //
// //
// //
// //
// const tokyo = {
//   name: 'Tokyo',
//   minCust: 3,
//   maxCust: 24,
//   avgSale: 1.2,
//   randomCust: [],
//   cookieSim: [],
//   getRandomCust: function() {
//     return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
//   },
//   hourData: function(){
//     for (let hour = 0; hour < 14; hour++) {
//       this.randomCust.push(this.getRandomCust());
//       this.cookieSim.push(Math.round(this.randomCust[hour] * this.avgSale));
//     }
//   }
// };
// tokyo.hourData();

// let tokyoSpot = document.getElementsByClassName('tokyo')[0];
// let tokyoTotal = 0;
// for (let i = 0; i < tokyo.cookieSim.length; i++)
// {
//   let listItem = document.createElement('li');
//   let hour = i + 6;
//   let meridiem = 'am';

//   if (hour>=12){
//     if (hour > 12) {
//       hour -= 12;
//     }
//     meridiem = 'pm';
//   }

//   tokyoTotal += tokyo.cookieSim[i];
//   listItem.textContent = `${hour} ${meridiem}: ${tokyo.cookieSim[i]} cookies`;
//   tokyoSpot.appendChild(listItem);
// }
// let totalTokyo = document.createElement('li');
// totalTokyo.textContent = `Total: ${tokyoTotal} cookies`;
// tokyoSpot.appendChild(totalTokyo);

// //
// //
// //
// //

// const dubai = {
//   name: 'Dubai',
//   minCust: 11,
//   maxCust: 38,
//   avgSale: 3.7,
//   randomCust: [],
//   cookieSim: [],
//   getRandomCust: function() {
//     return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
//   },
//   hourData: function(){
//     for (let hour = 0; hour < 14; hour++) {
//       this.randomCust.push(this.getRandomCust());
//       this.cookieSim.push(Math.round(this.randomCust[hour] * this.avgSale));
//     }
//   }
// };

// //
// //
// //
// //

// const paris = {
//   name: 'Paris',
//   minCust: 20,
//   maxCust: 38,
//   avgSale: 2.3,
//   randomCust: [],
//   cookieSim: [],
//   getRandomCust: function() {
//     return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
//   },
//   hourData: function(){
//     for (let hour = 0; hour < 14; hour++) {
//       this.randomCust.push(this.getRandomCust());
//       this.cookieSim.push(Math.round(this.randomCust[hour] * this.avgSale));
//     }
//   }
// };

// //
// //
// //
// //

// const lima = {
//   name: 'Lima',
//   minCust: 2,
//   maxCust: 16,
//   avgSale: 4.6,
//   randomCust: [],
//   cookieSim: [],
//   getRandomCust: function() {
//     return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
//   },
//   hourData: function(){
//     for (let hour = 0; hour < 14; hour++) {
//       this.randomCust.push(this.getRandomCust());
//       this.cookieSim.push(Math.round(this.randomCust[hour] * this.avgSale));
//     }
//   }
// };
