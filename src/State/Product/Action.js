import { api } from "../../config/apiConfig";

import {
  FIND_PRODUCTS_REQUEST,
  FIND_PRODUCTS_SUCCESS,
  FIND_PRODUCTS_FAILURE,
  FIND_PRODUCT_BY_ID_REQUEST,
  FIND_PRODUCT_BY_ID_SUCCESS,
  FIND_PRODUCT_BY_ID_FAILURE
} from "./ActionType";

export const findProducts = (reqData) => async (dispatch) => {
  const {
    colors,
    sizes,
    minPrice,
    maxPrice,
    minDiscount,
    category,
    stock,
    sort,
    pageNumber,
    pageSize,
  } = reqData;

  dispatch({ type: FIND_PRODUCTS_REQUEST });

  try {
    const queryParams = new URLSearchParams({
      color: colors,
      size: sizes,
      minPrice: minPrice,
      maxPrice: maxPrice,
      minDiscount: minDiscount,
      category: category,
      stock: stock,
      sort: sort,
      pageNumber: pageNumber,
      pageSize: pageSize
    }).toString();

    const { data } = await api.get(`/api/products?${queryParams}`);

    console.log("get product data - in success", data);
    dispatch({
      type: FIND_PRODUCTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: FIND_PRODUCTS_FAILURE,
      payload: error.message,
    });
    
  }
};

export const findProductsById = (reqData) => async (dispatch) => {
  dispatch({ type: FIND_PRODUCT_BY_ID_REQUEST });
  const { productId } = reqData;
  console.log("products by id: ", productId);
  try {
    const { data } = await api.get(`/api/products/id/${productId}`);
    console.log("data",data);

    
    dispatch({
      type: FIND_PRODUCT_BY_ID_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: FIND_PRODUCT_BY_ID_FAILURE,
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
    });
  }
};
