// div in html - id="bread-container"
// printToDom function in utils
// breadData will have array of bread objects, export a getBreads function
// each bread object = type, color, price, id
// breads.js component - with domString builder (find something nice in bootstrap) use getBreads function
// import breads component into main
// event listener on radio button - call breadData.setSelectedBread(breadId);
// setSelectedBread = assign a variable (selectedBreadId) to the id passed in (console.log the id)

import breadButtons from './components/bread.js';
import cheeseButtons from './components/cheese.js';

const init = () => {
    breadButtons.makeBreadRadioButtons();
    cheeseButtons.makeCheeseButtons();
};

init();