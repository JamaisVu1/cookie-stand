'use strict';

const seattle = {
  name: 'Seattle',
  minCust: 23,
  maxCust: 65,
  avgSale: 6.3,
  randomCust: [],
  cookieSim: [],
  getRandomCust: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
  },
  hourData: function(){
    for (let hour = 0; hour < 14; hour++) {
      this.randomCust.push(this.getRandomCust());
      this.cookieSim.push(Math.round(this.randomCust[hour] * this.avgSale));
    }
  }
};
seattle.getRandomCust();
seattle.hourData();


const tokyo = {
  name: 'Tokyo',
  minCust: 3,
  maxCust: 24,
  avgSale: 1.2,
  randomCust: [],
  cookieSim: [],
  getRandomCust: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
  },
  hourData: function(){
    for (let hour = 0; hour < 14; hour++) {
      this.randomCust.push(this.getRandomCust());
      this.cookieSim.push(Math.round(this.randomCust[hour] * this.avgSale));
    }
  }
};

const dubai = {
  name: 'Dubai',
  minCust: 11,
  maxCust: 38,
  avgSale: 3.7,
  randomCust: [],
  cookieSim: [],
  getRandomCust: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
  },
  hourData: function(){
    for (let hour = 0; hour < 14; hour++) {
      this.randomCust.push(this.getRandomCust());
      this.cookieSim.push(Math.round(this.randomCust[hour] * this.avgSale));
    }
  }
};

const paris = {
  name: 'Paris',
  minCust: 20,
  maxCust: 38,
  avgSale: 2.3,
  randomCust: [],
  cookieSim: [],
  getRandomCust: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
  },
  hourData: function(){
    for (let hour = 0; hour < 14; hour++) {
      this.randomCust.push(this.getRandomCust());
      this.cookieSim.push(Math.round(this.randomCust[hour] * this.avgSale));
    }
  }
};

const lima = {
  name: 'Lima',
  minCust: 2,
  maxCust: 16,
  avgSale: 4.6,
  randomCust: [],
  cookieSim: [],
  getRandomCust: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
  },
  hourData: function(){
    for (let hour = 0; hour < 14; hour++) {
      this.randomCust.push(this.getRandomCust());
      this.cookieSim.push(Math.round(this.randomCust[hour] * this.avgSale));
    }
  }
};

