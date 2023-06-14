const { createSlice } = require("@reduxjs/toolkit");

const cartIntialState={isShow:false}
const cartSlice=createSlice({
    name:"store",
    initialState:cartIntialState,
    reducers:{
        toggleStore(state){
            state.isShow=!state.isShow
        }
    }
})

export const{toggleStore}= cartSlice.actions
export default cartSlice.reducer;