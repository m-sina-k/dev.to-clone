import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { uploadNewPost } from "helpers/firebaseMethods";
import { PostType } from "types/types";

interface State {
  postUploadLoading: boolean;
  postUploadError: string | null;
}

export const uploadPost = createAsyncThunk(
  "uploadPostSlice/uploadPost",
  async (post: PostType, { rejectWithValue }) => {
    const postUploaded = await uploadNewPost(post);
    if (!postUploaded) return rejectWithValue("خطا در بارگذاری پست.");
    return true;
  }
);

const initialState: State = {
  postUploadLoading: false,
  postUploadError: null,
};

const postsSlice = createSlice({
  name: "uploadPostSlice",
  initialState,
  reducers: {
    setPostUploadError: (state, { payload }) => {
      state.postUploadError = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(uploadPost.pending, (state) => {
        state.postUploadLoading = true;
      })
      .addCase(uploadPost.fulfilled, (state) => {
        state.postUploadLoading = false;
      })
      .addCase(uploadPost.rejected, (state, action) => {
        const errorMsg = action.payload as string;
        state.postUploadLoading = false;
        state.postUploadError = errorMsg;
      });
  },
});

export const { setPostUploadError } = postsSlice.actions;

export const getUploadPostState = (state: any) => state.uploadPost;

export default postsSlice.reducer;
