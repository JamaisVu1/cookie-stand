"use strict";

// store constructor
function Store(name, minCust, maxCust, avgSale) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgSale = avgSale;
  this.randomCust = [];
  this.cookieSim = [];
  this.totalSold = 0;
}

// rnadom customer generator
Store.prototype.getRandomCust = function () {
  return (
    Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust
  );
};

// gpt helped with for loop
Store.prototype.hourData = function () {
  this.totalSold = 0;
  for (let hour = 6; hour <= 19; hour++) {
    this.randomCust.push(this.getRandomCust());
    this.cookieSim.push(Math.round(this.randomCust[hour - 6] * this.avgSale));
    this.totalSold += this.cookieSim[hour - 6];
  }
};

Store.prototype.render = function () {
  let body = document.getElementById('stores');
  let storeRow = document.createElement('tr');
  body.appendChild(storeRow);

  let nameCell = document.createElement('td');
  nameCell.textContent = this.name;
  storeRow.appendChild(nameCell);

  for (let i = 0; i < this.cookieSim.length; i++) {
    let hourCell = document.createElement('td');
    hourCell.textContent = this.cookieSim[i];
    storeRow.appendChild(hourCell);
  }

  let totalCell = document.createElement('td');
  totalCell.textContent = this.totalSold;
  storeRow.appendChild(totalCell);
};

const seattle = new Store('Seattle', 23, 65, 6.3);
const tokyo = new Store('Tokyo', 3, 24, 1.2);
const dubai = new Store('Dubai', 11, 38, 3.7);
const paris = new Store('Paris', 20, 38, 2.3);
const lima = new Store('Lima', 2, 16, 4.6);

// so new row can update stores
const stores = [seattle,tokyo,dubai,paris,lima];

seattle.hourData();
// console.log(seattle);
tokyo.hourData();
dubai.hourData();
paris.hourData();
lima.hourData();

seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();

const totalRow = document.getElementById('totals');
const grandTotalCell = document.createElement('td');
grandTotalCell.textContent = 0;
totalRow.appendChild(grandTotalCell);

function addRowToTable(locationName, minCustomers, maxCustomers, avgCookie) {
  const tableBody = document.getElementById('stores');
  const row = document.createElement('tr');
  tableBody.appendChild(row);

  const store = new Store(locationName, minCustomers, maxCustomers, avgCookie);
  store.hourData();
  store.render();
  stores.push(store);
  renderFooter(stores);
}

document
  .getElementById('cookieAdder')
  .addEventListener('submit', function (event) {
    event.preventDefault();

    const locationName = document.getElementById('locationName').value;
    const minCustomers = parseInt(
      document.getElementById('minCustomers').value
    );
    const maxCustomers = parseInt(
      document.getElementById('maxCustomers').value
    );
    const avgCookie = parseFloat(document.getElementById('avgCookie').value); // Use parseFloat for decimal numbers

    addRowToTable(locationName, minCustomers, maxCustomers, avgCookie);

    document.getElementById('locationName').value = '';
    document.getElementById('minCustomers').value = '1';
    document.getElementById('maxCustomers').value = '1';
    document.getElementById('avgCookie').value = '1';
  });

function renderFooter(stores) {
  let headerRow = document.createElement('tr');
  totalRow.innerHTML = '';

  let headerCell = document.createElement('td');
  headerCell.textContent = 'Totals:';
  headerRow.appendChild(headerCell);

  let grandTotal = 0;

  for (let i = 0; i < stores[0].cookieSim.length; i++) {
    let totalSales = 0;

    for (let x = 0; x < stores.length; x++) {
      totalSales += stores[x].cookieSim[i];
    }

    let hourCell = document.createElement('td');
    hourCell.textContent = totalSales;
    headerRow.appendChild(hourCell);
    grandTotal += totalSales;
  }

  grandTotalCell.textContent = grandTotal;
  headerRow.appendChild(grandTotalCell);
  totalRow.appendChild(headerRow);
}
renderFooter([seattle, tokyo, dubai, paris, lima]);







// constructs main page flex boxes/ gpt was consulted on implementing flex boxes into a constructor and identifying errors in code

class StoreInfo {
  constructor(city, hours, phoneNumber, location) {
    this.city = city;
    this.hours = hours;
    this.location = location;
    this.phoneNumber = phoneNumber;
  }

  render() {
    let storesContainer = document.getElementById('storeInfo');
    let storeBox = document.createElement('div');
    storeBox.className = 'store';
    storeBox.style.display = 'flex';
    storeBox.style.flexDirection = 'column';

    let nameHeader = document.createElement('h2');
    nameHeader.textContent = this.city;

    let ul = document.createElement('ul');

    let hoursLi = document.createElement('li');
    hoursLi.textContent = 'Hours: ' + this.hours;

    let locationLi = document.createElement('li');
    locationLi.textContent = 'Location: ' + this.location;

    let phoneNumberLi = document.createElement('li');
    phoneNumberLi.textContent = 'Phone: ' + this.phoneNumber;

    ul.appendChild(hoursLi);
    ul.appendChild(locationLi);
    ul.appendChild(phoneNumberLi);

    storeBox.appendChild(nameHeader);
    storeBox.appendChild(ul);

    storesContainer.appendChild(storeBox);
  }
}

const seattleInfo = new StoreInfo(
  'Seattle',
  '6 AM - 7 PM',
  '600 4th Ave',
  '678-999-8212'
);

const tokyoInfo = new StoreInfo(
  'Tokyo',
  '6 AM - 7 PM',
  '1-7-1 Nagatacho, Chiyoda City',
  '678-999-8212'
);

const dubaiInfo = new StoreInfo(
  'Dubai',
  '6 AM - 7 PM',
  '1 Sheikh Mohammed bin Rashid Blvd',
  '678-999-8212'
);

const parisInfo = new StoreInfo(
  'Paris',
  '6 AM - 7 PM',
  '55 Rue du Faubourg Saint-Honoré',
  '678-999-8212'
);

const limaInfo = new StoreInfo(
  'Lima',
  '6 AM - 7 PM',
  'Jirón de la Unión 1000',
  '678-999-8212'
);

seattleInfo.render();
tokyoInfo.render();
dubaiInfo.render();
parisInfo.render();
limaInfo.render();

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
