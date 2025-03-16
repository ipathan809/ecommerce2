
import { api } from "../../../config/apiConfig";
import { DELETE_CUSTOMERS_FAILURE,
   DELETE_CUSTOMERS_REQUEST,
   DELETE_CUSTOMERS_SUCCESS,
   GET_ALL_CUSTOMERS_FAILURE,
    GET_ALL_CUSTOMERS_REQUEST, 
    GET_ALL_CUSTOMERS_SUCCESS } from "./ActionType";


export const getAllCustomers = () => {

  return async (dispatch) => {
    dispatch({type:GET_ALL_CUSTOMERS_REQUEST});
    try {
     
      const response = await api.get(`/api/admin/customers/`);
      console.log("get all customers ", response.data);
      dispatch({type:GET_ALL_CUSTOMERS_SUCCESS,payload:response.data});
    } catch (error) {
      console.log("catch error ", error);
      dispatch({type:GET_ALL_CUSTOMERS_FAILURE,payload:error.message});
    }
  };
};

export const deleteCustomer = (customerId) => {
  return async(dispatch) => {
    dispatch({type:DELETE_CUSTOMERS_REQUEST});     
   try {
     const {data} = await api.delete(`/api/admin/customers/${customerId}/delete`);
     console.log("delete customer",data)
     dispatch({type:DELETE_CUSTOMERS_SUCCESS,payload:data});
   } catch (error) {
    console.log("catch error ",error)
     dispatch({type:DELETE_CUSTOMERS_FAILURE,payload:error.message});
   }
      
  };
};

