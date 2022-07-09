import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { auth } from "server/firebase.config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import {
  setAuthErrorMessage,
  registerUserInFirestore,
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
  userCredentials: UserCredentials | null;
  currentUser: object | null;
  loadingCredentials: boolean;
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
      return true;
    } catch (error:any) {
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
      await signInWithEmailAndPassword(auth, email, password);
      return true;
    } catch (error:any) {
      console.log(error);
      return rejectWithValue(setAuthErrorMessage(error.code));
    }
  }
);

export const userSignOut = createAsyncThunk(
  "authSlice/userSignOut",
  async () => {
    try {
      await signOut(auth);
      return true;
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState: State = {
  authLoading: false,
  loadingCredentials: true,
  authError: { message: "", errorCode: "" },
  userCredentials: null,
  currentUser: null,
};

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    setAuthError: (state, { payload }) => {
      state.authError = payload;
    },
    setCurrentUser: (state, { payload }) => {
      state.currentUser = payload;
    },
    setCredentialsLoading: (state, { payload }) => {
      state.loadingCredentials = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(userSignUp.pending, (state) => {
        state.authLoading = true;
      })
      .addCase(userSignUp.fulfilled, (state) => {
        state.authLoading = false;
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
      })
      .addCase(userSignIn.rejected, (state, action) => {
        state.authLoading = false;
        const error = action.payload as AuthError;
        state.authError = error;
      });
  },
});

export const { setCredentialsLoading, setAuthError, setCurrentUser } =
  authSlice.actions;
export const getAuthState = (state: any) => state.auth;

export default authSlice.reducer;
