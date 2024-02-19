import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCars = createAsyncThunk("fetchCars", async () => {
 const data = await fetch('')
    return data.json()
  });
  
  export const fetchCarById = createAsyncThunk('car/fetchCarById', async (carId) => {
    try {
      const response = await axios.get(`https://car-api2.p.rapidapi.com/api/vin/1GTG6CEN0L1139305${carId}`);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }); 

const carSlice = createSlice({
    name: 'car',
    initialState: {
        isLoading: false,
        data: null,
        error: false
    },
    reducers: {},
extraReducers: (builder) => {
    builder
    .addCase(fetchCars.fulfilled, (state, action) => {
        state.success = 'succeeded';
        state.cars = action.payload;
    })
    .addCase(fetchCarById.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.cars = state.cars.filter((car) => car.id !== action.payload);
    })
    .addMatcher(
        (action) => action.type.endsWith('/pending'),
        (state) => {
          state.status = 'loading';
        },
      )
      .addMatcher(
        (action) => action.type.endsWith('/rejected'),
        (state, action) => {
          state.status = 'failed';
          state.error = action.error.message;
        },
      );
}
});


export const selectDoctors = (state) => state.car.cars;
export const selectStatus = (state) => state.car.status;
export const selectError = (state) => state.car.error;

export default carSlice.reducer;
