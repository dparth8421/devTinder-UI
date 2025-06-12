import { createSlice } from "@reduxjs/toolkit";

const feed = createSlice({
    name:'feed',
    initialState:null,
    reducers:{
        addFeed:(state, action)=>{
            return action.payload;
        },
        removeFeed:(state, action)=>{
            return null;
        }
    }
})

export const { addFeed, removeFeed } = feed.actions;

export default feed.reducer;