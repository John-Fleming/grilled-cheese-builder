import cheeseData from '../helpers/data/cheesData.js';
import util from '../helpers/util.js';

const selectCheese = (e) => {
    const cheeseId = e.target.id;
    cheeseData.setSelectedCheese(cheeseId);
}

const addCheeseEvent = () => {
    const cheeseButtons = document.getElementsByClassName('cheese-btn');
    for (let i = 0; i < cheeseButtons.length; i++) {
        cheeseButtons[i].addEventListener('click', selectCheese);
    }
};

const makeCheeseButtons = () => {
    const cheeses = cheeseData.getCheese();
    let domString = '';
    cheeses.forEach((cheese) => {
        domString += `<button id="${cheese.id}" type="button" class="btn btn-warning cheese-btn mx-1">${cheese.type}</button>`;
    }
    )
    util.printToDom('cheese-container', domString);
    addCheeseEvent();
};

export default { makeCheeseButtons };