import { createSlice } from '@reduxjs/toolkit'



export const homeslice = createSlice({
  name: 'home',
  initialState:{
    url:{},
    genres:{}
  },
  reducers: {
getApiconfigration:(state,action)=>{
state.url=action.payload
},
getgenres:(state,action)=>{
    state.genres=action.payload
}


  },
})

// Action creators are generated for each case reducer function
export const {getApiconfigration,getgenres  } = homeslice.actions

export default homeslice.reducer