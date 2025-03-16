import { DELETE_CUSTOMERS_FAILURE, DELETE_CUSTOMERS_REQUEST, 
    DELETE_CUSTOMERS_SUCCESS, GET_ALL_CUSTOMERS_FAILURE, 
    GET_ALL_CUSTOMERS_REQUEST, GET_ALL_CUSTOMERS_SUCCESS, 
    UPDATE_CUSTOMERS_FAILURE, UPDATE_CUSTOMERS_REQUEST, 
    UPDATE_CUSTOMERS_SUCCESS } from "./ActionType";

const initialState = {
    loading: false,
    customers: [],  // ✅ Fixed customers key
    error: "",
  };
  
const adminCustomerReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_CUSTOMERS_REQUEST:
            return { ...state, loading: true };
        
        case GET_ALL_CUSTOMERS_SUCCESS:
            return { 
                ...state,
                loading: false,
                customers: action.payload,  // ✅ Fixed key (previously orders)
                error: "",
            };
        
        case GET_ALL_CUSTOMERS_FAILURE:
            return { 
                ...state,
                loading: false,
                customers: [],  // ✅ Fixed key (previously orders)
                error: action.payload,
            };

        case UPDATE_CUSTOMERS_REQUEST:
            return { ...state, loading: true };
        
        case UPDATE_CUSTOMERS_SUCCESS:
            return { ...state, loading: false, customers: action.payload };
        
        case UPDATE_CUSTOMERS_FAILURE:
            return { 
                ...state,
                loading: false,
                error: action.payload,
            };   
        
        case DELETE_CUSTOMERS_REQUEST:
            return { ...state, loading: true };
        
        case DELETE_CUSTOMERS_SUCCESS:
            return { ...state, loading: false, deleteCustomer:action.payload};
        
        case DELETE_CUSTOMERS_FAILURE:
            return { ...state, loading: false, error: action.payload };

        default:
            return state;  // ✅ Ensure state is always returned
    }
};
  
export default adminCustomerReducer;
