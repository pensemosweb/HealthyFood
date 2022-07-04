import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { fetchData } from '../../api/index';

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    status: 'idle',
    error: null,
    items: [],
  },
  reducers: {
    isLoadingUpdated(state, action) {
      state.isLoading = action.payload;
    },
    postsUpdated(state, action) {
      state.publications = action.payload;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchPosts.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = state.items.concat(action.payload.items);
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default postsSlice.reducer;
export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  return await fetchData('/fakeApi/posts');
});
export const { isLoadingUpdated, postsUpdated } = postsSlice.actions;
export const selectAllPosts = (state) => state.posts.items;