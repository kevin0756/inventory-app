const mongoose = require('mongoose');

const Schema = mongoose.Schema,
  model = mongoose.model.bind(mongoose),
  ObjectId = mongoose.Schema.Types.ObjectId;

const inventorySchema = new Schema({
	  _id: ObjectId,
	  product_name: String
	});


const Inventory = model('Inventory', inventorySchema);

module.exports = {
		Inventory
};