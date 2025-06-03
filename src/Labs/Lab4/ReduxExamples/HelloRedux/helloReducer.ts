import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  message: "Hello World! How are you?",
};
const helloSlice = createSlice({
  name: "hello",
  initialState,
  reducers: {},
});
export default helloSlice.reducer;
