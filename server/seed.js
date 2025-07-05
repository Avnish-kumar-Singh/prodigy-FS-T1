const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('./models/Product');

dotenv.config();

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('✅ MongoDB connected'))
.catch(err => console.error('❌ DB Connection Error:', err));

const products = [
{
name: 'Sample Product',
description: 'A great product',
price: 499,
image: 'https://via.placeholder.com/150',
inStock: true,
},
{
name: 'NoiseFit Halo Smartwatch',
description: 'AMOLED Display, Bluetooth Calling, Fitness Tracker',
price: 3499,
image: 'https://m.media-amazon.com/images/I/61epn29QG0L.SX679.jpg',
inStock: true,
},
{
name: 'boAt Airdopes 141',
description: 'True Wireless Earbuds with 42H Playtime & ASAP Charge',
price: 1299,
image: 'https://m.media-amazon.com/images/I/61KNJav3S9L.SX679.jpg',
inStock: true,
},
{
name: 'Zebronics ZEB-NC9000 Cooling Pad',
description: 'Dual Fan Laptop Cooling Pad with RGB Lights',
price: 899,
image: 'https://m.media-amazon.com/images/I/712rM1HuwCL.SX679.jpg',
inStock: true,
},
];

const insert = async () => {
try {
await Product.deleteMany(); // Optional: clear old products
await Product.insertMany(products);
console.log('✅ Products inserted');
} catch (err) {
console.error('❌ Insertion error:', err);
} finally {
mongoose.disconnect();
}
};

insert();