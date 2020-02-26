const cheeses = [{
    type: 'Swiss',
    color: 'cornsilk',
    price: .75,
    id: 'cheese1'
}, 
{
    type: 'Blue',
    color: 'lightblue',
    price: 1.00,
    id: 'cheese2'
},
{
    type: 'American',
    color: 'yellow',
    price: 1.50,
    id: 'cheese3'
},
];

let selectedCheese = '';

const setSelectedCheese = (cheeseId) => {
    selectedCheese = cheeseId;
    console.log('setSelectedCheese', selectedCheese);
}

const getCheese = () => {
    return cheeses;
};

export default { getCheese, setSelectedCheese };
