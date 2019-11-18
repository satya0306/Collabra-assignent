const initialState = {
    products: []
}

const ProductReducer = (state = initialState, action) =>{
    switch(action.type){
        case 'ADD_PRODUCT':
            return{
                products: state.products.concat([action.product])
            };

        case 'DELETE_PRODUCT':
            return{
                products: state.products.filter((p) => p.id !== action.id)
            };
        case 'EDIT_PRODUCT':
            return{
                products: state.products.filter((p) => p.id === action.id)
            };
        case 'UPDATE_PRODUCT':
            var products = state.products.map((p)=>{
                if(p.id === action.product.id){
                    return{
                        ...p,
                        name: action.product.name,
                        price: action.product.price
                    }
                } else{
                    return p;
                }
            })
            return{
                products: products
            };
        default:
            return state;
    }

}


export default ProductReducer;