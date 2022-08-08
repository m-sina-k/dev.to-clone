import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchPostsFromFirestore } from "helpers/firebaseMethods";
import { PostType } from "types/types";

interface State {
  posts: PostType[];
  fetchPostsLoading: boolean;
  fetchPostsError: string | null;
  helpPosts: PostType[];
  discussPosts: PostType[];
}

const initialState: State = {
  posts: [],
  helpPosts: [],
  discussPosts: [],
  fetchPostsLoading: false,
  fetchPostsError: null,
};

export const fetchPosts = createAsyncThunk(
  "fetchPostSlice/fetchPosts",
  async (_, { rejectWithValue }) => {
    const postFetched = await fetchPostsFromFirestore();
    if (!postFetched) return rejectWithValue("خطا در دریافت پست ها از سرور.");
    return {
      allPosts: postFetched as PostType[],
      helpPosts: postFetched.filter(
        (post) => post.postDetails.tags.find((tag: any) => tag.name === "help") as PostType[]
      ),
      discussPosts: postFetched.filter(
        (post) => post.postDetails.tags.find((tag: any) => tag.name === "discuss") as PostType[]
      ),
    };
  }
);

const fetchPostSlice = createSlice({
  name: "fetchPostSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.fetchPostsLoading = true;
      })
      .addCase(fetchPosts.fulfilled, (state, { payload }) => {
        state.fetchPostsLoading = false;
        state.posts = payload.allPosts;
        state.discussPosts = payload.discussPosts;
        state.helpPosts = payload.helpPosts;
      })
      .addCase(fetchPosts.rejected, (state, { payload }) => {
        state.fetchPostsLoading = false;
        state.fetchPostsError = payload as string;
      });
  },
});

export const getAllPosts = (state: any) => state.fetchPosts.posts;
export const getHelpPosts = (state: any) => state.fetchPosts.helpPosts;
export const getDiscussPosts = (state: any) => state.fetchPosts.discussPosts;
export const getFetchLoadingStatus = (state: any) => state.fetchPosts.fetchPostsLoading;
export const getFetchPostsError = (state: any) => state.fetchPosts.fetchPostsError;

export default fetchPostSlice.reducer;
