
const express = require('express');
const cors = require('cors');
const productRoutes = require('./routes/productRoutes');
const { notFound, errorHandler } = require('./utils/errorMiddleware');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => res.send('API is running...'));
app.use('/api/products', productRoutes);
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
