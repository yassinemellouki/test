import { createSlice } from "@reduxjs/toolkit";

export interface UsersType {
  isLoading: boolean | null;
  isError: string | null;
  data: UserType[] | null;
}

export interface UserType {
  id: number;
  name: string;
  username: string;
  email: string;
  lastLoginDay: string;
  lastLoginMessage: string;
  department: string;
  isActive: boolean;
  statusColor: "green" | "red";
  avatar: string;
  statusStyle?: string;
}

const initialState: UsersType = {
  isLoading: null,
  isError: null,
  data: null,
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    usersRequest(state) {
      state.isLoading = true;
      state.isError = null;
    },
    getUsersSuccess(state, action) {
      state.data = action.payload;
      state.isLoading = false;
    },
    getUsersFailure(state, action) {
      state.isError = action.payload;
      state.isLoading = false;
    },
    userRequest(state, action) {
      state.isLoading = true;
      state.isError = null;
    },
    getUserSuccess(state, action) {
      const userId = action.payload.id;
      let updatedData = null;
      if (state.data) {
        updatedData = [...state.data];
        const userIndex = state.data.findIndex((user) => user.id === userId);

        if (userIndex !== -1) {
          updatedData[userIndex] = action.payload;
        } else {
          updatedData.push(action.payload);
        }
      }
      state.data = updatedData;
      state.isLoading = false;
    },
    getUserFailure(state, action) {
      state.isError = action.payload;
      state.isLoading = false;
    },
  },
});

export const {
  usersRequest,
  getUsersSuccess,
  getUsersFailure,
  userRequest,
  getUserSuccess,
  getUserFailure,
} = usersSlice.actions;

export default usersSlice.reducer;
