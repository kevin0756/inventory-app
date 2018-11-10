var Model = require('../models/inventory');
const {Inventory} = Model;
const mongoose = require('mongoose')
var ObjectID = require('mongodb').ObjectID;


const inventoryController = {
		
		fetchInventoryProductById (req, res) {
			console.log('fetchInventoryProductById()')
			try{
				console.log(req.params.productId);
				Inventory.findOne({_id: new ObjectID(req.params.productId)}, (err, inventoryProduct) => {
			      if (err) {
			        res.status(500).send(err);
			      } else {
			        res.json(inventoryProduct);
			      }
			})
			}catch(err){
				console.log('Error occurred in fetchInventoryProductById() ' + err);
				res.status(500).send("Error occured while fetching inventory product");
			}
		},
		
		fetchInventoryProducts (req, res) {
			console.log('fetchInventoryProducts()')
			try{
				Inventory.find({}, (err, inventoryProducts) => {
			      if (err) {
			        res.status(500).send(err);
			      } else {
			        res.send(inventoryProducts);
			      }
			})
			}catch(err){
				console.log('Error occurred in fetchInventoryProducts() ' + err);
				res.status(500).send("Error occured while fetching inventory products");
			}
		},
		
		saveProduct(req, res) {
			console.log('saveProduct()');
			
			try{
				var requestBody = req.body;
				console.log(req.body)
				productsArray = requestBody.products;
				productsArray.map(product => { 
					product._id = mongoose.Types.ObjectId();
					return product});
			    
				Inventory.insertMany(productsArray, function (err, savedObj) {
		    	   	   if (err) {
		    	   		   console.log(err);
		    	   		   throw err;
		    	   	   }
		    	   	   else{
		    	  		   res.status(201).json({"message": "save successful"});
		    	   	   }
		    	   	 });
				
			}catch(err){
				console.log('Error in inventoryAPI.saveProduct() ' + err);
				res.status(500).send("Error occured " + err);
			}
			
		},
		
		updateInventoryProductById(req, res){
			console.log('updateInventoryProductById()');
			Inventory.update({_id: new ObjectID(req.params.productId)},{$set: {product_name: req.body.product_name}}, function(err, product){
					  if(err){ 
						  console.log('error while updating ' + err);
						  res.status(500).send("Error while updating product " + req.params.productId)
					  }else{
						  res.send("Update successful");
					  }
				});
		},
		
		
		deleteProductById (req, res) {
			console.log('deleteProductById()')
			try{
				console.log(req.params.productId)
				Inventory.remove({'_id': new ObjectID(req.params.productId)}, (err, deletedItem) => {
			      if (err) {
			        res.status(500).send(err);
			      } else {
			        res.send("Product with id " + req.params.productId + " deleted successfully");
			      }
			})
			}catch(err){
				console.log('Error occurred in deleteProductById() ' + err);
				res.status(500).send("Error occured while deleting product with id " + req.params.productId);
			}
		}
		
		
}

module.exports = inventoryController;