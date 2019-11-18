import React from 'react';
import { Link, Route } from 'react-router-dom';
import './App.css';
import ProductList from './components/product';
import AddProduct from './components/product/add';
import EditProduct from './components/product/edit';

function App() {
  return (
    <div className="App">
      <h3>CRUD With Redux</h3>
      <Link to='/index' style={{padding:"5px"}}>Home</Link>
      <Link to='/add' style={{padding:"5px"}}>Add</Link>
      <br/><br/>
      <Route path='/' exact component={ProductList}/>
      <Route path='/index' component={ProductList}/>
      <Route path='/add'  component={AddProduct}/>
      <Route path='/edit/:id'  component={EditProduct}/>
    </div>
  );
}

export default App;
