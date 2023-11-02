
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

    let phoneNumberLi = document.createElement('li');
    phoneNumberLi.textContent = 'Contact Info: ' + this.phoneNumber;

    let locationLi = document.createElement('li');
    locationLi.textContent = 'Location: ' + this.location;



    ul.appendChild(hoursLi);
    ul.appendChild(phoneNumberLi);
    ul.appendChild(locationLi);

    storeBox.appendChild(nameHeader);
    storeBox.appendChild(ul);

    storesContainer.appendChild(storeBox);
  }
}

const seattleInfo = new StoreInfo('Seattle', "6 AM - 7 PM", '678-999-8212','600 4th Ave');

const tokyoInfo = new StoreInfo('Tokyo', '6 AM - 7 PM', '678-999-8212', '1-7-1 Nagatacho, Chiyoda City' );

const dubaiInfo = new StoreInfo('Dubai', '6 AM - 7 PM', '678-999-8212', '1 Sheikh Mohammed bin Rashid Blvd');

const parisInfo = new StoreInfo('Paris', '6 AM - 7 PM', '678-999-8212', '55 Rue du Faubourg Saint-Honoré');

const limaInfo = new StoreInfo('Lima', '6 AM - 7 PM', '678-999-8212', 'Jirón de la Unión 1000');

seattleInfo.render();
tokyoInfo.render();
dubaiInfo.render();
parisInfo.render();
limaInfo.render();
