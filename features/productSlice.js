import {
  createAsyncThunk,
  createSlice
} from "@reduxjs/toolkit";

/* FETCH PRODUCTS */

export const fetchProducts = createAsyncThunk(

  "products/fetchProducts",

  async (category) => {

    const resp = await fetch(

      `https://dummyjson.com/products/category/${category}`

    );

    const jsonResp = await resp.json();

    return jsonResp.products;

  }

);

/* INITIAL STATE */

const initialState = {

  items: [],

  status: undefined,

  error: null,

  category: "smartphones",

  search: ""

};

/* PRODUCT SLICE */

const productsSlice = createSlice({

  name: "productsSlice",

  initialState,

  reducers: {

    /* CATEGORY */

    setCategory: (state, action) => {

      state.category = action.payload;

    },

    /* SEARCH */

    setSearch: (state, action) => {

      state.search = action.payload;

    }

  },

  extraReducers: (builder) => {

    builder.addCase(

      fetchProducts.fulfilled,

      (state, action) => {

        state.status = "succeeded";

        state.items = action.payload;

      }

    );

  }

});

/* EXPORT ACTIONS */

export const {

  setCategory,
  setSearch

} = productsSlice.actions;

/* EXPORT REDUCER */

export default productsSlice.reducer;