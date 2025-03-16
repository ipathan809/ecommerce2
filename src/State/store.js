import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./Auth/Reducer";
import customerProductReducer from "./Product/Reducer";
import cartReducer from "./Cart/Reducer";
import { orderReducer } from "./Order/Reducer";
import adminOrderReducer from "./Admin/Order/Reducer";
import adminCustomerReducer from "./Admin/Customer/Reducer";

const rootReducers = combineReducers({
      auth:authReducer,
      products:customerProductReducer,
      cart:cartReducer,
      order:orderReducer,
      adminOrder:adminOrderReducer,
      adminCustomer:adminCustomerReducer
})

export const store = legacy_createStore(rootReducers,applyMiddleware(thunk))