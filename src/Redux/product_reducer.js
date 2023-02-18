import {GET_PRODUCTS_LOADING, GET_PRODUCTS_ERROR, GET_PRODUCTS_SUCCESS} from "./product_type";

const initialState = {

    isLoading: false,
    isError: false,
    data: [],  
   
  };

  export const product_reducer = (oldState = initialState, action) => {
    const { type, payload } = action;
  
    switch (type) {
      case GET_PRODUCTS_LOADING:
        return {
          ...oldState,
          isLoading: true,
          isError: false,
        };
  
      case GET_PRODUCTS_SUCCESS:
        return {
          ...oldState,
          data: payload,
          isLoading: false,
          isError: false,
        };
  
      case GET_PRODUCTS_ERROR:
        return {
          ...oldState,
          isLoading: false,
          isError: true,
        };
   
      default:
        return oldState;
    }
  };