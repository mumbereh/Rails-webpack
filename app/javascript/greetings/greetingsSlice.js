import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const GREETINGS_URL = "http://127.0.0.1:3000/api/v1/greetings";

export const getGreetings = createAsyncThunk(
  "greetings/getGreetings",
  async (_, thunkAPI) => {
    try {
      const resp = await axios.get(GREETINGS_URL);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const greetingsSlice = createSlice({
  name: "greeting",
  initialState: {
    randomGreeting: "",
  },
  reducers: {
    setRandomGreeting: (state, action) => {
      state.randomGreeting = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getGreetings.fulfilled, (state, action) => {
      state.randomGreeting = action.payload[0]?.body || "";
    });
  },
});

export const { setRandomGreeting } = greetingsSlice.actions;
export default greetingsSlice.reducer;
