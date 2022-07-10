import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { auth } from "server/firebase.config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import {
  setAuthErrorMessage,
  registerUserInFirestore,
  fetchUserInfo,
} from "helpers/authMethods";

interface AuthError {
  message: string;
  errorCode?: string;
}

interface UserCredentials {
  id: string;
  email: string;
  username: string;
}

interface State {
  authLoading: boolean;
  authError: AuthError;
  currentUser: UserCredentials | null;
}

interface FormData {
  email: string;
  password: string;
}

export const userSignUp = createAsyncThunk(
  "authSlice/userSignUp",
  async (formData: FormData, { rejectWithValue }) => {
    const { email, password } = formData;
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const userCredentials: UserCredentials = {
        email,
        id: response.user.uid,
        username: email.split("@")[0],
      };
      const registrationSucceeded = await registerUserInFirestore(
        userCredentials
      );
      if (!registrationSucceeded)
        return rejectWithValue({ message: "خطا در ثبت کاربر در فایر استور." });
      return userCredentials;
    } catch (error: any) {
      console.log(error);
      return rejectWithValue(setAuthErrorMessage(error.code));
    }
  }
);

export const userSignIn = createAsyncThunk(
  "authSlice/userSignIn",
  async (formData: FormData, { rejectWithValue }) => {
    const { email, password } = formData;
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      const userCredentials: UserCredentials = await fetchUserInfo(user.uid);
      return userCredentials;
    } catch (error: any) {
      console.log(error);
      return rejectWithValue(setAuthErrorMessage(error.code));
    }
  }
);


const lsCurrentUser = localStorage.getItem("DEV.to__user-credentials");

const initialState: State = {
  authLoading: false,
  authError: { message: "", errorCode: "" },
  currentUser: lsCurrentUser ? (JSON.parse(lsCurrentUser) as UserCredentials) : null,
};

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    setAuthError: (state, { payload }) => {
      state.authError = payload;
    },
    userSignOut:(state)=>{
      state.currentUser = null
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(userSignUp.pending, (state) => {
        state.authLoading = true;
      })
      .addCase(userSignUp.fulfilled, (state, { payload }) => {
        state.authLoading = false;
        state.currentUser = payload;
      })
      .addCase(userSignUp.rejected, (state, action) => {
        const error = action.payload as AuthError;
        state.authLoading = false;
        state.authError = error;
      })
      .addCase(userSignIn.pending, (state) => {
        state.authLoading = true;
      })
      .addCase(userSignIn.fulfilled, (state, { payload }) => {
        state.authLoading = false;
        state.currentUser = payload;
      })
      .addCase(userSignIn.rejected, (state, action) => {
        state.authLoading = false;
        const error = action.payload as AuthError;
        state.authError = error;
      });
  },
});

export const { setAuthError,userSignOut } = authSlice.actions;
export const getAuthState = (state: any) => state.auth;

export default authSlice.reducer;
