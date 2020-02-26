const breads = [{
    type: 'white',
    color: 'white',
    price: .75,
    id: 'bread1'
}, 
{
    type: 'wheat',
    color: 'wheat',
    price: 1.00,
    id: 'bread2'
},
{
    type: 'rye',
    color: 'burlywood',
    price: 1.50,
    id: 'bread3'
},
];

let selectedBread = '';

const setSelectedBread = (breadId) => {
    selectedBread = breadId;
    console.log('setSelectedBread', selectedBread);
};

const getBread = () => {
    return breads;
}

export default { getBread, setSelectedBread };