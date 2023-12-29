import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCategories = createAsyncThunk('metrics/fetchCategories', async () => {
  const response = await fetch('https://emojihub.yurace.pro/api/all');
  const data = await response.json();
  return data;
});

const metricsSlice = createSlice({
  name: 'metrics',
  initialState: {
    categories: [],
    selectedCategory: null,
    categoryDetails: null,
  },
  reducers: {
    selectCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    setCategoryDetails: (state, action) => {
      state.categoryDetails = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.categories = action.payload;
    });
  },
});
export const { selectCategory, setCategoryDetails } = metricsSlice.actions;
export default metricsSlice.reducer;