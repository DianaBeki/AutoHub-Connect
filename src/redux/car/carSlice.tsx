import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCarss = createAsyncThunk('car/fetchCars', async () => {
    try {
      const response = await axios.get('http://127.0.0.1:3000/api/v1/cars/');
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  });
  
  export const fetchCarById = createAsyncThunk('doctor/fetchCarById', async (carId) => {
    try {
      const response = await axios.get(`http://127.0.0.1:3000/api/v1/cars/${carId}`);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }); 

const carSlice = createSlice({
name: 'car',
initialState: {cars: [], status: 'idle', error: null},
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
