import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchProducts, fetchProductById } from '../services/mockData';

export const loadProducts = createAsyncThunk(
  'products/loadProducts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetchProducts();
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const loadProductById = createAsyncThunk(
  'products/loadProductById',
  async (id, { rejectWithValue }) => {
    try {
      const response = await fetchProductById(id);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Helper function to apply all filters
const applyFilters = (items, filters) => {
  let result = [...items];
  
  // Apply category filter
  if (filters.category) {
    result = result.filter(product => 
      product.category.toLowerCase() === filters.category.toLowerCase()
    );
  }
  
  // Apply price range filter
  if (filters.priceRange && filters.priceRange.length === 2) {
    const [min, max] = filters.priceRange;
    result = result.filter(product => {
      if (min !== null && product.price < min) return false;
      if (max !== null && product.price > max) return false;
      return true;
    });
  }
  
  // Apply sorting
  if (filters.sortBy === 'price-low') {
    result.sort((a, b) => a.price - b.price);
  } else if (filters.sortBy === 'price-high') {
    result.sort((a, b) => b.price - a.price);
  } else if (filters.sortBy === 'rating') {
    result.sort((a, b) => b.rating - a.rating);
  }
  // 'featured' keeps original order
  
  return result;
};

const initialState = {
  items: [],
  filteredItems: [],
  currentProduct: null,
  loading: false,
  error: null,
  filters: {
    category: null,
    priceRange: null,
    sortBy: 'featured',
  },
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setFilter: (state, action) => {
      const { key, value } = action.payload;
      state.filters[key] = value;
      
      // Re-apply all filters from original items
      state.filteredItems = applyFilters(state.items, state.filters);
    },
    clearFilters: (state) => {
      state.filters = {
        category: null,
        priceRange: null,
        sortBy: 'featured',
      };
      state.filteredItems = state.items;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loadProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
        // Apply any existing filters to new data
        state.filteredItems = applyFilters(action.payload, state.filters);
      })
      .addCase(loadProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(loadProductById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loadProductById.fulfilled, (state, action) => {
        state.loading = false;
        state.currentProduct = action.payload;
      })
      .addCase(loadProductById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setFilter, clearFilters } = productSlice.actions;

export default productSlice.reducer;
