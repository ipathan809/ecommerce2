import {
    FIND_PRODUCTS_REQUEST,
    FIND_PRODUCTS_SUCCESS,
    FIND_PRODUCTS_FAILURE,
    FIND_PRODUCT_BY_ID_REQUEST,
    FIND_PRODUCT_BY_ID_SUCCESS,
    FIND_PRODUCT_BY_ID_FAILURE,
    DELETE_PRODUCTS_SUCCESS,
    DELETE_PRODUCTS_REQUEST,
    DELETE_PRODUCTS_FAILURE
    
  } from "./ActionType";

  const initialState = {
    products: [],
    product: null,
    loading: false,
    error: null,
    deleteProduct:null,
  };
  
  const customerProductReducer = (state = initialState, action) => {
    switch (action.type) {
      case FIND_PRODUCTS_REQUEST:
        return { ...state, loading: true, error: null};
      case FIND_PRODUCT_BY_ID_REQUEST:
        return { ...state, loading: true, error: null };  
      case FIND_PRODUCTS_SUCCESS:
        return { ...state, products: action.payload, error: null,loading: false };
      case FIND_PRODUCT_BY_ID_SUCCESS:
        return { ...state, product: action.payload,error: null, loading: false };  
      case FIND_PRODUCTS_FAILURE:
        return { ...state, loading: false,error: action.payload };
      case FIND_PRODUCT_BY_ID_FAILURE:
        return { ...state, loading: false, error: action.payload };
        // case CREATE_PRODUCT_REQUEST:
        //   return {
        //     ...state,
        //     loading: true,
        //     error: null,
        //   };
        // case CREATE_PRODUCT_SUCCESS:
        //   return {
        //     ...state,
        //     loading: false,
        //     products: [...state.products, action.payload],
        //   };
        // case CREATE_PRODUCT_FAILURE:
        //   return {
        //     ...state,
        //     loading: false,
        //     error: action.payload,
        //   };
        // case UPDATE_PRODUCT_REQUEST:
        //   return {
        //     ...state,
        //     loading: true,
        //     error: null,
        //   };
        // case UPDATE_PRODUCT_SUCCESS:
        
        //   return {
        //     ...state,
        //     loading: false,
        //     products: state.products.map((product) =>
        //       product.id === action.payload.id ? action.payload : product
        //     ),
        //   };
        // case UPDATE_PRODUCT_FAILURE:
        //   return {
        //     ...state,
        //     loading: false,
        //     error: action.payload,
        //   };
        case DELETE_PRODUCTS_REQUEST:
          return {
            ...state,
            loading: true,
            error: null,
          };
        case DELETE_PRODUCTS_SUCCESS:
          console.log("dlete ",state.products)
          return {
            ...state,
            loading: false,
            deleteProduct:action.payload
            
            
          };
        case DELETE_PRODUCTS_FAILURE:
          return {
            ...state,
            loading: false,
            error: action.payload,
          };
      default:
        return state;
    }
  };
  
  export default customerProductReducer;