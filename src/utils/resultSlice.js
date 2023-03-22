import { createSlice } from "@reduxjs/toolkit";

const resultSlice = createSlice({
    name: 'results',
    initialState : {
        isSearched : false,
        searchQuery : ''
    },

    reducers : {
        searchResults : (state, action) => {
            state.isSearched = true;
            state.searchQuery = action.payload;
        }
    }

})

export const { searchResults } = resultSlice.actions;
export default resultSlice.reducer;