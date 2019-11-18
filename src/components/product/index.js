import React, { Component } from 'react';
import { connect } from 'react-redux';

class ProductList extends Component {
    state={
        items:[]
    }

    delete=(e)=>{
        var id = e.target.getAttribute('data-key') ;
        this.props.dispatch({
            type: 'DELETE_PRODUCT',
            id: id
        });
        this.props.history.push('/');
    }

    edit=(e)=>{
        var id = e.target.getAttribute('data-key') ;
        this.props.dispatch({
            type: 'EDIT_PRODUCT',
            id: id
        });
        this.props.history.push('/edit/' + id);
    }

    handleOnChange=(value, checked)=>{
        this.setState({
            items: this.state.items.map(item => item.value === value ? { value, checked: !checked } : item)
          });
    }
    render() {
        return (
            <div>
                <h3>product list</h3>
                <table border="1" style={{margin:"0 auto"}}>
                    <thead>
                        <tr>
                            <th>Checkbox</th>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.products.map(function(product,index){
                            return(
                                <tr key={product.id}>
                                    <td>
                                        <input type="checkbox" onChange={()=>this.handleOnChange(product,product.id)}/>
                                        <span style={checkboxStyle(product.checked)}>{product.value}</span>
                                    </td>
                                    <td>{product.id}</td>
                                    <td>{product.name}</td>
                                    <td>{product.price}</td>
                                    <td>
                                        <input type="button" 
                                            value="Edit" 
                                            data-key={product.id} 
                                            onClick={this.edit}/> |
                                        <input type="button" 
                                            value="Delete" 
                                            data-key={product.id} 
                                            onClick={this.delete}/>
                                    </td>
                                </tr>
                            )
                        }, this)}
                    </tbody>
                </table>
                <p>Completed Table Content: {this.state.items.filter(item => item.checked).length}</p>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return{
        products: state.products
    }
}

function checkboxStyle(checked) {
    return {
        textDecoration: checked? 'line-through' : 'none',
      };
  }

export default connect(mapStateToProps)(ProductList);