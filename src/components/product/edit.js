import React, { Component } from 'react';
import { connect } from 'react-redux';


class EditProduct extends Component {

   handleSubmit = (e) =>{
       e.preventDefault();
       this.props.dispatch({
           type: 'UPDATE_PRODUCT',
           product: {
               id: e.target.id.value,
               name: e.target.name.value,
               price: e.target.price.value
           }
       });
       this.props.history.push('/')
   }
    render() {
        return (
            <div>
                <h3> edit product</h3>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name='id' readOnly="true" placeholder="Id" defaultValue={this.props.product.id} />
                    <br/><br/>
                    <input type="text" name='name' placeholder="Name" defaultValue={this.props.product.name}/>
                    <br/><br/>
                    <input type="text" name='price' placeholder="Price" defaultValue={this.props.product.price}/>
                    <br/><br/>
                    <input type="submit" value="Save"/>
                </form>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return{
        product: state.products[0]
    }
}

export default connect(mapStateToProps)(EditProduct); 