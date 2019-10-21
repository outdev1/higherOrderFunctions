// Making a posting schedual
// - Video about different setups vscode node etc
// - Video about difference between node.js and browser runtime
// - 

// filter higher than 50 - range of nubers
const prices = [21, 84, 32, 92, 12, 6, 47, 101, 11, 56];

const aboveFifty = prices.filter( price => {
  return price > 50;
})

console.log('Above 50:', aboveFifty);

const findNum = prices.filter( price => {
  return price === 12;
})

console.log('Find 50:', findNum);


// map - transform a user object
const products = [
  {
    id: 1,
    name: 'Macbook',
    color: 'grey',
    model: 2010,
    price: 1000,
    processor: 'i5'

  },
  {
    id: 2,
    name: 'Dell',
    color: 'black',
    model: 2015,
    price: 2000,
    processor: 'i7'

  },
  {
    id: 3,
    name: 'HP',
    color: 'grey',
    model: 2011,
    price: 1500,
    processor: 'i5'
  }
];

const productIndex = products.map( product => {
  return {
    id: product.id,
    name: product.name
  }
});

console.log(productIndex);
// reduce - research this one
// sort - Alphabetise a list


