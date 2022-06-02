const mongoose = require('mongoose');
const ObjectId = mongoose.SchemaTypes.ObjectId;

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: [true, "Por favor rellena el nombre del producto"],
      },
    price: {
        type: Number,
        required: [true, "Por favor rellena el precio del producto"],
      },
    reviews: [{
        userId: { type: ObjectId, ref: 'User' },
        comment: String
    }],
    likes: [{ type: ObjectId }],
}, { timestamps: true });

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;