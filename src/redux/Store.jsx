import { configureStore } from "@reduxjs/toolkit";
import useReducer from './UserSlice'

const Store = configureStore({
  reducer : {
wdata : useReducer
  }
})

export default Store;