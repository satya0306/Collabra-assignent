import React, { Component } from 'react';
import { connect } from 'react-redux';

class AddProduct extends Component {
    constructor(props){
        super(props);
        this.state={
            id:'',
            name:'',
            price:0
        }
    }

    handleInputChange = (e) =>{
         this.setState({
             [e.target.name] : e.target.value
         })
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.dispatch({
            type: 'ADD_PRODUCT',
            product: this.state
        });
        this.props.history.push('/')
    }
    render() {
        return (
            <div>
                <h3>Add product</h3>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name='id' placeholder="Id" value={this.state.id} onChange={this.handleInputChange}/>
                    <br/><br/>
                    <input type="text" name='name' placeholder="Name" value={this.state.name} onChange={this.handleInputChange} />
                    <br/><br/>
                    <input type="text" name='price' placeholder="Price" value={this.state.price} onChange={this.handleInputChange}/>
                    <br/><br/>
                    <input type="submit" value="Save"/>
                </form>
            </div>
        );
    }
}

export default connect()(AddProduct);