import React, { Component } from 'react';
import {Route} from 'react-router';
import { BrowserRouter, Redirect } from 'react-router-dom'
import './App.css';
import HomePage from './App.js';

class EditProduct extends Component {
	constructor() {
	    super();
	    this.state = {
	      productDetails: null,
	      submitStatus: '',
	    };
	  }

	  // ...

	  handleSubmit =  e => {
            e.preventDefault();
            var status;
		    fetch('/api/inventory/update-product-by-id/' + this.props.productId, {
		      method: 'PUT',
		      headers: {
		        'Content-Type': 'application/json',
		      },
		      body: JSON.stringify({ product_name: this.state.productDetails.product_name })
		    }).then((response) => {status = response.ok;  return response.text()}, error => console.log('error occurred while updating product ' + error)
            ).then((responseText) => {
                    if(status)
                        this.setState({submitStatus: 'Details Edited Successfully'})
                    else{
                        console.log('An error occurred ' + responseText)
                    }
                }
                    );
		  }
	  
	  handleProductNameChange = (id) => (evt) => {
		    const newProducts = {product_name: evt.target.value };
		    this.setState({ productDetails: newProducts });
		  }
	  
	  
	  
	   componentDidMount() {
		  fetch('/api/inventory/fetch-product-by-id/' + this.props.productId, {
			      method: 'GET',
			      headers: {
				        'Content-Type': 'application/json',
				      },
			    }).then(response => response.json()).then(
		    		(jsonData) => this.setState({productDetails: jsonData})
                    ,(error) => console.log(error));
		  }
	  
	  renderRedirect = (path, id) => {
			this.setState({referrer: path});
		  }


	  render() {
		  const {referrer} = this.state;
	        if (referrer) return (<BrowserRouter><div>
	        <Route exact path="/" component={ HomePage }/>
	        <Redirect to={referrer} />
	        </div>
	        </BrowserRouter>)
		  var productDetails = this.state.productDetails;
		  var productName;
		  var productId = this.props.productId;
		  if(productDetails)
			  productName = productDetails.product_name;
		  return (
	      <form onSubmit={this.handleSubmit}>
	        {/* ... */}
	        <h3 className="alignCentre">{this.state.submitStatus}</h3>
	        <h4>Edit Product Details</h4>

	          <div className="shareholder">
	            <input
	              type="text"
	              value={productName}
	              onChange={this.handleProductNameChange(productId)}
	            />
	          </div>
	            <button className="small alignRight" onClick={() => this.renderRedirect('/', null)}>Back</button>
	        <button>Submit</button>
	        
	      </form>
	    )
	  }
	}
	
export default EditProduct;