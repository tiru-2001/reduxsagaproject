import { createSlice } from "@reduxjs/toolkit";

const Catadata = createSlice({
  name: "cat",
  initialState: {
    mycat: [],
    isDataFetched: false,
  },
  reducers: {
    fetchdata(state) {
      state.isDataFetched = true;
    },
    datafetched(state, action) {
      state.mycat = action.payload;
      state.isDataFetched = false;
    },
  },
});

export default Catadata.reducer;
export const { fetchdata, datafetched } = Catadata.actions;
