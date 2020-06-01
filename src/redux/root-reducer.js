import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; //Local storage on our window browser. Works also to import sessionStorage - difference in functionality though.
import directoryReducer from "./directory/directory.reducer";
import shopReducer from "./shop/shop.reducer";

//we start storing form the root. whitelist is a string name of any reducers that we want to store.storage is just localstorage
const persistConfig = {
    key: "root",
    storage,
    whitelist: ["cart"],
};

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer,
});

//user already stored by firebase Auth. Modified version of our root reducer but not with modification capabilities.
export default persistReducer(persistConfig, rootReducer);
