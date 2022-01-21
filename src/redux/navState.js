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
    showServices:(state)=>{state.varShowServices =! state.varShowServices}
    /*showProductos:(state)=>{state.varShowProductos=!state.varShowProductos}*/
  }
})

// Action creators are generated for each case reducer function
export const {showNavBar, showProductos,showServices} = navBarSlice.actions

export default navBarSlice.reducer

/* incrementByAmount: (state, action) => {
      state.value += action.payload
    }, */