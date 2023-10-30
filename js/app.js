'use strict';

const seattle = {
  name: 'Seattle',
  minCust: 23,
  maxCust: 65,
  avgSale: 6.3,
  getRandomCust: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
  }
};

const tokyo = {
  name: 'Tokyo',
  minCust: 3,
  maxCust: 24,
  avgSale: 1.2,
  getRandomCust: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
  }
};

const dubai = {
  name: 'Dubai',
  minCust: 11,
  maxCust: 38,
  avgSale: 3.7,
  getRandomCust: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
  }
};

const paris = {
  name: 'Paris',
  minCust: 20,
  maxCust: 38,
  avgSale: 2.3,
  getRandomCust: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
  }
};

const lima = {
  name: 'Lima',
  minCust: 2,
  maxCust: 16,
  avgSale: 4.6,
  getRandomCust: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
  }
};

