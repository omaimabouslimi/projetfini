import {createSlice} from "@reduxjs/toolkit";

const initialState ={
    foods:[{
        title:"pizza",
        description:"delicious food mark"
    }]
}


const foodSlice = createSlice({
    name:"pizzaria",
    initialState,
    reducers:{
        setProduct:(state,action)=>{
            state.foods = action.payload;
            return state
        }
    }
    ,AddPanier:(state,action)=>{
        let exciste=state.foods.findIndex((Item)=>{
          Item._id===action.payload._id
        })
        if(exciste >= 0){
            state.foods.pop(action.payload)
           
          // si mech mawjoud nzidou lel lista
           }else{
            state.foods.unshift(action.payload)
           }
    }}
)


export const {setProduct,AddPanier} = foodSlice.actions;
export default foodSlice.reducer