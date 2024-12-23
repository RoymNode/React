import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

interface City {
  id: number;
  name: string;
  imageUrl: string
  isFavorite: boolean;
}

interface CitiesState {
  cities: City[];
  status: 'idle' | 'loading' | 'failed';
}

const initialState: CitiesState = {
  cities: [],
  status: 'idle',
};

export const fetchCities = createAsyncThunk(
  'cities/fetchCities',
  async () => {
    const response = await fetch('http://localhost:5000/cities');
    return response.json();
  }
);

export const citiesSlice = createSlice({
    name: 'cities',
    initialState,
    reducers: {
        toggleFavorite: (state, action) => {
            const city = state.cities.find(c => c.id === action.payload);
            if (city) {
                city.isFavorite = !city.isFavorite;
            }
        },
    },
    extraReducers: (builder) => {
    builder
        .addCase(fetchCities.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(fetchCities.fulfilled, (state, action) => {
            state.status = 'idle';
            state.cities = action.payload;
        })
        .addCase(fetchCities.rejected, (state, action) => {
            state.status = 'failed';
        });
    }
});

export const { toggleFavorite } = citiesSlice.actions;
export default citiesSlice.reducer;