
const products = [
  { id: 1, name: 'Racoon', price: 20, description: 'Curious forest explorer' },
  { id: 2, name: 'Dragonfly', price: 15, description: 'Elegant aerial dancer' },
  { id: 3, name: 'Redfox', price: 25, description: 'Cunning and graceful predator' }
];

const getProducts = (req, res) => {
  res.json(products);
};

const getProductById = (req, res) => {
  const product = products.find(p => p.id === Number(req.params.id));
  if (product) res.json(product);
  else res.status(404).json({ message: 'Product not found' });
};

module.exports = { getProducts, getProductById };
