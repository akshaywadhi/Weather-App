import React from 'react'
import {createSlice} from '@reduxjs/toolkit'

const userSlice = createSlice({
  name : 'wdata',
  initialState : {
    wdata : []
  },
  reducers : {
getWData : (state, action) => {
state.wdata.push(action.payload)
}
  }
})

export const {getWData} = userSlice.actions;
export default userSlice.reducer;
