import { createSlice } from '@reduxjs/toolkit'

export const navBarSlice = createSlice({
  name: 'navBar',
  initialState:{
      varShow:false,
      varShowServices:false,
      varShowProductos:false
  },
  reducers: {
    showNavBar: (state) => {state.varShow =! state.varShow},
    showServices:(state)=> {state.varShowServices =! state.varShowServices;console.log(state.varShowServices);}
  }
})

export const {showNavBar, showProductos,showServices} = navBarSlice.actions

export default navBarSlice.reducer
