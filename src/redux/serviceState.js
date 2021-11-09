import { createSlice } from '@reduxjs/toolkit'
import ServiciosLista from './samples/servicios.json'

export const navBarSlice = createSlice({
  name: 'servicios',
  initialState:{
      servicios:ServiciosLista
     
  },
 
})

// Action creators are generated for each case reducer function
export const {showNavBar} = navBarSlice.actions

export default navBarSlice.reducer

/* incrementByAmount: (state, action) => {
      state.value += action.payload
    }, */