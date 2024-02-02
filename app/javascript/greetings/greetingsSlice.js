import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const GREETINGS_URL = "/api/v1/greetings";


// Action Type Constants
const GET_GREETINGS = "greetings/getGreetings";

export const getGreetings = createAsyncThunk(GET_GREETINGS, async (_, thunkAPI) => {
  try {
    const resp = await axios.get(GREETINGS_URL);
    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

const greetingsSlice = createSlice({
  name: "greetings",
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
