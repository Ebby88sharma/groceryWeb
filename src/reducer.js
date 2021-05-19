export const initialState = {
    cart : [
    //     {
    //     id:"130" ,
    //     title:"Broccoli Fresh 300 gm to 350/500 grams" ,
    //     price:0.99 ,
    //     image:"https://assetscdn1.paytm.com/images/catalog/product/F/FA/FASFRESHO-BROCCBIGB98583274F5D38C/1561513392326_0.jpg?imwidth=320&impolicy=hq"
    // }
],
    user: null,

};
const reducer = (state, action) => {
    console.log(action);
    switch(action.type){
        case"SET_USER":
        return {...state,
        user: action.user
        }
        case "ADD_TO_CART":
            //for adding to cart
            return {
                ...state,
                 cart:[...state.cart,action.item],
            };
                   case"DELETE_FROM_CART":
        //for deleting from cart
        return {state};
        
        default:
            return state;
    }
}
export default reducer;