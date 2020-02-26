import breads from '../helpers/data/breadData.js';
import util from '../helpers/util.js';

const selectBread = (e) => {
    let breadId = e.target.id;
    breads.setSelectedBread(breadId);
}

const addRadioEvent = () => {
    const radioButtons = document.getElementsByClassName('breadRadio');
    for (let i = 0; i < radioButtons.length; i++) {
        radioButtons[i].addEventListener('click', selectBread);
    }
};

const makeBreadRadioButtons = () => {
    const allBreads = breads.getBread();
    let domString = '';
    allBreads.forEach((bread) => {
        domString += '<div class="custom-control custom-radio custom-control-inline">';
        domString +=   `<input type="radio" id="${bread.id}" name="customRadioInline1" class="custom-control-input breadRadio">`;
        domString +=   `<label class="custom-control-label" for="${bread.id}">${bread.type}</label>`;
        domString += '</div>';
    });
    util.printToDom('bread-container', domString);
    addRadioEvent();
};

export default { makeBreadRadioButtons };